---
type: Playbook
title: Evaluate scripts
description: Read live Sandustry state with evaluate_script — JSON-only returns, batching, and entry resolution.
tags:
  - sandustry
  - okf
  - live
  - evaluate
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
---

# Evaluate

Read live state with `evaluate_script`.

## Rules

- Set `waitForStableDom: false`.
- Return JSON-serializable data only; slice large strings (for example `.slice(0, 2000)`).
- Batch related reads in **one** function — not one call per field.
- Large output → `filePath` under `.tmp/`.

## Entry resolution

Use the first path that works:

```javascript
() => {
  const g = globalThis;
  const sk = typeof sandkit !== "undefined" ? sandkit : g.sandkit;
  const state = sk?.engine?.state ?? sk?.state ?? g.__debug?.state ?? null;
  return {
    hasSandkit: Boolean(sk?.api),
    hasDebug: Boolean(g.__debug),
    scene: state?.store?.scene?.active ?? null,
  };
};
```

Ambient `sandkit` worked in `evaluate_script` on 0.5.5 (`hasSandkit: true` when `sandkit.api` exists).
On **0.5.6** (live CDP `:9222`, agent-browser and sandustry MCP), `typeof sandkit` and `globalThis.sandkit` are both **undefined** in evaluate scope even in-game (`scene` 4).
**`window.sandkit` may still be missing** on older builds — check `typeof window.sandkit`.
Fall back to **`__debug.state`** for store, `shared`, and `state.sandkit.mods.*` reads.
Use `sandkit.api` only when `hasSandkit: true` (mod entry scope or builds where ambient binding returns).
Do not call mutators (`api.game.start`, saves, grid writes) unless the user asks.
Mutator bans live in each domain probe reference.

### Engine API when `sandkit` is missing (0.5.6)

When `__debug.state` exists but `state.sandkit.engine` is absent, resolve the webpack engine bag once per session:

```javascript
() => {
  const chunks = globalThis.webpackChunksand_v1;
  let mod = null;
  chunks.push([["__okf__" + Date.now()], {}, (r) => { mod = r(46781); }]);
  const FH = mod.FH;
  const st = globalThis.__debug.state;
  return {
    hasFH: Boolean(FH),
    energyKeys: FH?.energy ? Object.keys(FH.energy) : [],
    mapsArtifactCount: FH?.maps?.getArtifactLocations?.(st)?.length ?? null,
  };
};
```

Module **46781** exports `FH` (`sandkit.engine.api`).
Use `FH.structures.build(state, { x, y }, structureType)` — not `buildAtCell`.
Place Block terrain (`FH.terrains.createAt`) under snap cells before building.
Read-only probes should prefer `FH.maps.getArtifactLocations(state)` and `FH.energy.getNetwork(state, x, y)`.
Full id table: [Webpack module ids](/okf/internals/webpack-modules.md).

Done when the returned shape answers the question (or [Triage](/okf/live/triage.md) explains why not).

## Related

- [Probe internals](/okf/internals/probe.md) — host object safe/unsafe lists
- [Script templates](/okf/live/scripts.md) — reusable bundles
- [Attach](/okf/live/attach.md) — pick `pageId` before evaluate
