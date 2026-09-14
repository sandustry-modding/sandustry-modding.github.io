---
type: Playbook
title: World probe
description: Read-only live inspection of the world sim — safe entry points, mutator bans, and sample script shape for agents.
tags:
  - sandustry
  - okf
  - world
  - probe
  - agents
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: world-guide
    resource: /guides/world.md
  - id: extract
    resource: sandustry/source/
---

# World probe

Read-only inspection of the live world sim.
Return JSON-serializable data only.

Attach with `sandustry` MCP, then use `evaluate_script` with `waitForStableDom: false`.
Done when live keys match the reference concept for that branch (or the gap is logged in [Open gaps](/okf/world/gaps.md)).

## Entry points

| Object                        | Use                                                    |
| ----------------------------- | ------------------------------------------------------ |
| `__debug.state`               | Same as `sandkit.state`. Main probe bag.               |
| `__debug.config`              | `cellSize`, `chunkSize`, gravity, multithreading flag. |
| `__debug.getSchedulingMode()` | Sync read of scheduling mode (0-2).                    |

Ambient `sandkit` (and `sandkit.api`) is available in the renderer when the game is loaded; `window.sandkit` is often missing.
For vanilla buffer reads, `__debug.state` is enough (`__debug.state === sandkit.state`).
Use `sandkit.api` for live key/signature checks.
Do not call mutators in probes.

Host IPC and admin surfaces: [Engine and workers](/okf/internals/engine-and-workers.md).
F3 overlays: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## Safe reads

- `Object.keys` on `__debug.state.store.world`, `__debug.state.shared.sim`, `__debug.state.environment.multithreading`.
- Read `__debug.config.cellSize`, `chunkSize`, `useMultithreading`, `obstacleBreakpoint`.
- Read one `shared.sim.cellIds[y * width + x]` and decode with id ranges in [Grid and chunks](/okf/world/grid-chunks.md).
- Read scalar fields from `shared.sim.elementData.*[elementIndex]` for one index.
- Read one `shared.wallData.data[i]`, `shared.shadowMap.data[i]`, `shared.waterPresenceZones[zoneIndex]` (see [Sim stats](/okf/world/sim-stats.md) for zone math).
- Coarse stride scans (for example step 40) for counts, not full grid dumps.
- `__debug.getSchedulingMode()`.

Do not dump `cellIds`, `wallData.data`, or `shadowMap.data`.

## Unsafe (needs user ask)

Do not invoke without explicit user approval:

- `engine.api.game.*`, `__debug.admin.run`, save/load IPC, spawn/kill helpers
- `setWallDataAt`, heat/foliage/shadow engine mutators, `matters.register`
- `grid.excavateAtCell`, `grid.mutate`, `revealFogAtCell`, `reportActivityAtCell`, `redrawAroundCell`
- Element/terrain `createAtCell` / `replaceAtCell` / `removeAtCell`, `damageAtCell`, `setHitPointsAtCell`
- `pickups.spawnAtWorld`, `pickups.remove`, `pickups.pickUp`
- `__debug.setSchedulingMode`, `__debug.moveCamera`

## Sample script shape

```javascript
() => {
  const st = __debug.state;
  const sim = st.shared.sim;
  const x = 920,
    y = 1440;
  const i = y * sim.width + x;
  return {
    cellId: sim.cellIds[i],
    liveElements: sim.liveElementCount[0],
    chunkSize: sim.chunkSize,
  };
};
```

## Concept map

| Branch                                     | Concept                                                            |
| ------------------------------------------ | ------------------------------------------------------------------ |
| Grid size, cell id ranges, chunks          | [Grid and chunks](/okf/world/grid-chunks.md)                       |
| CellType vs element vs matter              | [Cells](/okf/world/cells.md)                                       |
| `api.grid`, `api.world` alias, `pickups`   | [Grid, world alias, and pickups](/okf/world/world-api.md)          |
| `api.elements` (main vs worker)            | [Elements API](/okf/world/elements.md)                             |
| `api.terrains`                             | [Terrains API](/okf/world/terrains.md)                             |
| Grid iteration helpers                     | [Grid iteration](/okf/world/grid-api.md)                           |
| `api.maps`                                 | [Maps API](/okf/world/maps.md)                                     |
| Reactions, excavation, fire, patterns      | [Sim crafting](/okf/world/sim-crafting.md)                         |
| `store.world`, horizon, fixtures           | [store.world session metadata](/okf/world/store-world.md)          |
| Wall, heat, shadows, foliage (engine)      | [Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md)  |
| Background rasters, prefabs, Pixi parallax | [Background layers](/okf/world/background-layers.md)             |
| Workers, scheduling, chunk flags           | [Workers and scheduling](/okf/world/workers.md)                    |
| idStats, overflowPool, water zones         | [Sim stats buffers](/okf/world/sim-stats.md)                       |
| Not confirmed yet                          | [Open gaps](/okf/world/gaps.md)                                    |
