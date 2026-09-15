---
type: Reference
title: Engine energy
description: Internal sandkit.engine.api.energy registry, method name map, and state.sandkit.mods.energy structure types.
tags:
  - sandustry
  - okf
  - energy
  - engine
  - runtime
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: engine-guide
    resource: /guides/engine.md
---

# Engine energy

Internal: `sandkit.engine.api.energy` (state-first, pass `state` as arg 0).
Prefer public `sandkit.api.energy` in mods.

## Engine method names (live)

| Engine | Public wrapper |
| --- | --- |
| `registerType` | `registerType` |
| `add` | `addAtCell` |
| `consume` | `consume` |
| `consumeExcludingNetwork` | `consumeExcludingNetworkAtCell` |
| `getNetwork` | `getNetworkAtCell` |
| `getNetworkFreeCapacity` | `getNetworkFreeCapacityAtCell` |

Also on engine only: `addBatch`.

## state.sandkit.mods.energy

Registry written by `registerType`.
Live on this save:

| Structure id | Type | Notable options |
| --- | --- | --- |
| `powerBrick` | storage | `priority: 1`, `maxEnergy: 1000`, `spritesheetThresholds: [0,1,600,1000]`, `onCharge` |
| `goldBattery` | storage | `excludeFromNetwork`, `canConsume`, `spritesheetThresholds: [0,1,8,16]`, `onConsume` |
| `steamTurbine` | conductor | — |
| `electricityConnector` | conductor | — |
| `snowmaker` | conductor | — |

`state.sandkit.mods.energyPriorities` — live `[0, 1]` (storage drain order).

Networks walk orthogonal neighbors at **4-cell** spacing (structure snap grid).
Nodes with `excludeFromNetwork` (goldBattery) are omitted from graph traversal but still store energy locally.

## `add` return value (0.5.6 extract)

`sandkit.engine.api.energy.add(state, cellX, cellY, amount, options?)` returns a **number**: total energy actually stored in the network.
Each storage node receives `min(remaining, maxEnergy - storedEnergy)`; the function returns `amount - leftover` after the queue walk.

## Worker-thread energy (0.5.6 extract)

Public `sandkit.api.energy` is **main thread only**.
Simulation workers still bundle `engine.api.energy` (`getNetwork`, storage drain, `onConsume` / `onCharge`).

Workers write `shared.energyChange` with `Atomics` when `environment.context !== Main` (charge FX cell coords in slots `[2]`/`[3]`).
`goldBattery` `storedEnergy` / `onConsume` logic runs on workers; main thread mirrors HUD from `shared.energy`.

CDP `:9222` cannot `evaluate_script` inside worker globals — see [Worker attach](/okf/live/worker-attach.md).
Do not call `energy.add` from probes unless the user asks.

## `onCharge` / `onConsume` callback shapes (bundle 0.5.6)

Registered on `energy.registerType` options.
Engine calls them during network charge and consume passes.

### `onCharge(state, structure, amountCharged)`

| Arg | Type | Role |
| --- | --- | --- |
| `state` | game state | First arg to all engine APIs |
| `structure` | structure instance | Cell origin, `data.storedEnergy`, `data.maxEnergy` |
| `amountCharged` | number | Energy delta added this tick (after cap vs `maxEnergy`) |

Called from internal `Ot` after `storedEnergy` and spritesheet index update.
If omitted, engine plays default charge light at structure center.

Vanilla `powerBrick`: creates charge lights at `4*(x+2), 4*(y+2)`.

## `powerBrick` placement and unlock (0.5.6 live)

Registry flags on `state.sandkit.mods.structures.powerBrick`: `disallowSelection: true`, `disallowPick: true`.
`FH.structures.isUnlocked(state, "powerBrick")` is **false** on the dev-tools save even when `store.player.tech.copperMold` is true.
The power brick is **not** a normal build-menu placement.

Player-facing obtain path (i18n + bundle): unlock `copperMold` tech, place a **Copper Mold**, fill it with **liquid copper** — the mold converts into a `powerBrick` storage tile.
Copier paste with `copiedStructure` is blocked: engine build returns **null** when `disallowSelection` is set and `copiedStructure` is passed (0.5.6 bundle guard).
`goldBattery` and `electricityConnector` accept `copiedStructure` paste on the same save.

Webpack probe mutator `FH.structures.build(state, { x, y }, "powerBrick")` **does** place instances (bypasses player unlock and copier rules).
Use that only on probe saves — not as a gameplay unlock path.
No `__debug.admin.run` command grants `powerBrick` or skips the mold fill step.

### `onConsume(state, structure, consumeAmount)`

| Arg | Type | Role |
| --- | --- | --- |
| `state` | game state | First arg |
| `structure` | structure instance | Storage node being drained |
| `consumeAmount` | number | Requested drain from this node (`min(poolRemaining, storedEnergy)`) |

**Return:** optional number.
When returned value `< consumeAmount`, the shortfall is restored to `structure.data.storedEnergy` and not deducted from the global energy pool.

Vanilla `goldBattery`: consumes up to four `florinol` cells in the 4×4 footprint per call; returns count of cells removed (creates `florinolSoil` terrain).
`canConsume` blocks drain when the player overlaps the structure.

## Related

- [sandkit.api.energy](/okf/energy/api-energy.md) — public wrapper surface.
- [Engine and workers](/okf/internals/engine-and-workers.md) — when to use engine vs public API.
