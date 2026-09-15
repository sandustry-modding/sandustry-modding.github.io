---
type: Playbook
title: Feature save setup
description: Build probe saves with pipes, energy, entities, and auth zones from void-world and dev-tools autosave baselines.
tags:
  - sandustry
  - okf
  - live
  - feature-save
  - probe
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:10:00Z
sources:
  - id: void-world
    resource: /okf/live/void-world.md
  - id: live-056
    resource: CDP :9222 dev-tools autosave
---

# Feature save setup

Most OKF gaps cite a **feature-empty** probe save (0 pipes, 0 energy structures, 0 entities, flat authorization).
This playbook builds **targeted** saves so domain probes can read real instances.

**User must ask** before any mutator in this file.
These scripts write game state and disk saves.

Pass `waitForStableDom: false` on every MCP call.
Re-run `list_pages` after reload; `pageId` changes.

## Entry resolution (0.5.6)

On live CDP `:9222`, ambient `sandkit` is often **missing** in `evaluate_script`.
Use the same resolver as [Evaluate](/okf/live/evaluate.md):

```javascript
() => {
  const g = globalThis;
  const sk = typeof sandkit !== "undefined" ? sandkit : g.sandkit;
  const st = sk?.engine?.state ?? sk?.state ?? g.__debug?.state;
  const eng = sk?.engine?.api ?? st?.sandkit?.engine?.api;
  return { hasSandkit: Boolean(sk?.api), hasDebug: Boolean(g.__debug), hasEng: Boolean(eng) };
};
```

When `hasSandkit` is false but `hasDebug` is true, bind helpers inside each script:

```javascript
const st = globalThis.__debug.state;
const eng = st.sandkit?.engine?.api; // engine twin when ambient sandkit missing
```

Prefer `sandkit.engine.api` / `eng` for placement and spawn calls when public `sandkit.api` is unreachable from evaluate scope.

## Choose a baseline

| Baseline | Grid | Typical load | Best for |
| --- | --- | --- | --- |
| [Void world](/okf/live/void-world.md) phases | 3840² campaign or cleared save | Manual void scripts + `eng.game.save` | Empty canvas; you place only what you need |
| Dev-tools autosave world | **1024 × 1024** | `?db_load=irishbruse.dev-tools-autosave-1` (or your mod world id) | Fast boot; mod registry loaded; F5 / Steam debug flow |
| Template F5 test world | **1024 × 1024** | Template `npm run dev` + F5 | Mod authoring; same grid math as dev autosave |

Dev autosave pattern (live 0.5.6): save id `irishbruse.dev-tools-autosave-1`, chunk grid **26 × 26** (676 chunk flags) — [Grid and chunks](/okf/world/grid-chunks.md).

Void-world Phase 1 already clears `store.pipes`, `store.pumpsCache`, structures, and entities.
Run void phases first when you need a clean slate on a campaign-sized map.

## Save helper

```javascript
(saveLabel, existingId) => {
  const st = globalThis.__debug.state;
  const eng = st.sandkit.engine.api;
  const id = eng.game.save(st, saveLabel, existingId);
  return { id };
};
```

First call omits `existingId`.
Later calls pass the returned id to overwrite the same slot.
See void-world [Save as you go](/okf/live/void-world.md).

Fix hotbar before other work on fresh worlds (`activeSlotIndex: null` crashes input) — void-world Phase 1.

## Feature recipes

Place structures at **snap-grid** cells (`config.snapGridCellSize` **4**).
Use a small platform in void saves (Block terrain id **15**) so the player can reach build cells.

### Pipes and pumps

Unlocks factory gaps: `store.pipes` / `pumpsCache` dumps, `pipes.isEnabledAtCell`, `getConnectedVentsAtCell`, `session.cache.pipes` on a live network.

Builtin ids: Pipe **23**, Pump **24**, LiquidVent **25** — [Factory enums](/okf/factory/enums.md).

```javascript
() => {
  const st = globalThis.__debug.state;
  const eng = st.sandkit.engine.api;
  const cx = 256;
  const cy = 256;
  eng.structures.build(st, { x: cx, y: cy }, 23); // pipe
  eng.structures.build(st, { x: cx + 4, y: cy }, 24); // pump (needs pipe at cell)
  eng.structures.build(st, { x: cx + 8, y: cy }, 25); // liquid vent
  const saveId = eng.game.save(st, "ProbePipes");
  return {
    saveId,
    pipes: st.store.pipes.length,
    pumpsCache: st.store.pumpsCache.length,
    atPump: eng.pipes.isAt(st, cx + 4, cy),
  };
};
```

Adjust `cx`/`cy` for 1024-grid saves (stay away from map edges).
Verify with [Factory probe](/okf/factory/probe.md) reads.

### Energy and signals

Unlocks energy gaps: `getNetworkAtCell` populated shape, `energy.addAtCell` partial-fill behavior (mutation — user ask), linked `store.mods.signals.links` buckets beyond empty save.

Place a conductor/storage structure registered in `state.sandkit.mods.energy` (for example `powerBrick`, `goldBattery`).
Use engine signal `link` / `set` only with user approval — [Engine signals runtime](/okf/energy/engine-signals.md).

Minimal pattern (structure ids vary by registry — read keys first):

```javascript
() => {
  const st = globalThis.__debug.state;
  const eng = st.sandkit.engine.api;
  const energyKeys = Object.keys(st.sandkit.mods.energy || {});
  const cx = 260;
  const cy = 260;
  // Example: place a registered energy structure type string from mods.energy
  const typeId = energyKeys.includes("powerBrick") ? "powerBrick" : energyKeys[0];
  if (typeId) eng.structures.build(st, { x: cx, y: cy }, typeId);
  const saveId = eng.game.save(st, "ProbeEnergy");
  return {
    saveId,
    energyModKeys: energyKeys,
    placed: typeId,
    structures: st.store.structures.length,
    resources: st.store.resources.energy,
  };
};
```

For signal wire graphs, place a sender and receiver pair (`signalButton` → `signalGate`), then use in-game link tool or engine `signals.link` with user ask.
Persisted graph: [Clipboard signal links](/okf/energy/clipboard.md).

### Entities (drones, projectiles, world items)

Unlocks entity gaps: live drone `data`, non-empty `getMarkers`, projectile attributes under motion.

```javascript
() => {
  const st = globalThis.__debug.state;
  const eng = st.sandkit.engine.api;
  const wx = 260 * 4;
  const wy = 260 * 4;
  // Example engine spawn — pick a known typeId from getAllTypeDefs
  const defs = eng.entities.getAllTypeDefs(st);
  const saveId = eng.game.save(st, "ProbeEntities");
  return {
    saveId,
    entityTypeIds: defs.map((d) => d.typeId).slice(0, 12),
    drones: st.store.drones.length,
    projectiles: st.store.projectiles.length,
    worldItems: st.store.worldItems.length,
  };
};
```

Use `eng.entities.spawn` / `eng.drones.spawn` only when the user asks — see [Entity probe](/okf/entities/probe.md) unsafe list.
`__debug.admin.run('digger')` etc. grant tools, not world entities — [__debug](/okf/internals/debug.md).

### Authorization zones

Unlocks factory gap: non-zero `shared.authorization.data` samples.

```javascript
() => {
  const st = globalThis.__debug.state;
  const auth = st.shared.authorization;
  const w = auth.width;
  const cx = 260;
  const cy = 260;
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      auth.data[(cy + dy) * w + (cx + dx)] = 3; // AuthorizationType.NoBuild
    }
  }
  const saveId = st.sandkit.engine.api.game.save(st, "ProbeAuth");
  return {
    saveId,
    sample: auth.data[cy * w + cx],
    canBuild: st.sandkit.engine.api.authorization.canBuild(st, cx, cy),
  };
};
```

Turn on F3 **show authorization zones** (`config.debug.showAuthorizationZones`) to visually confirm — [__debug](/okf/internals/debug.md).

## Suggested probe save matrix

| Save label | Features placed | Primary gaps closed |
| --- | --- | --- |
| `ProbePipes` | Pipe line + pump + vent | Factory pipes API and store dumps |
| `ProbeEnergy` | Power brick / battery + optional signal link | Energy `getNetworkAtCell`, signal links on disk |
| `ProbeEntities` | Drone or projectile spawn | Entity instance `data`, counts by type |
| `ProbeAuth` | NoBuild stamp | Authorization grid samples |
| `ProbeFactory` | Conveyor + launcher + queued build | Factory queue, launcher registry live |

Combine features in one save when batching probes — keep grid area small on 1024² maps.

## Verify (read-only)

After setup, run domain quick dumps ([Factory probe](/okf/factory/probe.md), [Energy probe](/okf/energy/probe.md), [Entity probe](/okf/entities/probe.md)) with `__debug.state` paths only.

Done when the target gap item in the domain `gaps.md` can move to a concept file or is marked confirmed.

## Related

- [Void world](/okf/live/void-world.md) — full map wipe and platform
- [Evaluate](/okf/live/evaluate.md) — 0.5.6 entry resolution
- [Worker attach](/okf/live/worker-attach.md) — worker-thread limits after feature saves
- [Extract layout](/okf/references/extract-layout.md) — source paths when live placement is blocked
