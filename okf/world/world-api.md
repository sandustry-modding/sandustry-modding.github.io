---
type: Reference
title: Grid, world alias, and pickups
description: sandkit.api.grid queries and mutations, deprecated api.world alias, api.constants.physics, and api.pickups.
tags:
  - sandustry
  - okf
  - world
  - grid
  - pickups
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

# `api.grid`, `api.world`, and `api.pickups`

Official signatures: [sandkit.html — api.grid](https://sandustry.com/sandkit.html), [api.pickups](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/grid.d.ts`, `src/sandkit/api/pickups.d.ts`.

Main entry grid mutations are deferred.
Reads see the old grid until they apply.
Worker entry mutations are immediate.
For state-dependent writes on main, use `api.grid.mutate`.

## `api.grid` (canonical)

### Sync queries (main and worker)

| Method                                                        | Role                          |
| ------------------------------------------------------------- | ----------------------------- |
| `getDimensions()`                                             | `{ widthCells, heightCells }` |
| `getCellIdAtCell(cellX, cellY)`                               | Packed cell id                |
| `isCellEmptyAtCell(cellX, cellY)`                             | True when id is 0             |
| `isTerrainAtCell(cellX, cellY)`                               | True when id is terrain range |
| `reportActivityAtCell(cellX, cellY)`                          | Wake chunk (**mutates**)      |
| `excavateAtCell(cellX, cellY, outVelocity, damage, options?)` | Dig terrain (**mutates**)     |

`ExcavateOptions`: `fromGun`, `fromDrill`, `fromRocketExplosion`, `useLiteralOutVelocity`, `destroyNonDestructible`, `forceRemoveAll`, `drillTierDamage`.

### Main thread only

| Method                                                                    | Role                                                       |
| ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `mutate(callback)`                                                        | Deferred element/terrain writes via `writer` (**mutates**) |
| `revealFogAtCell(cellX, cellY)`                                           | Clear fog (**mutates**)                                    |
| `redrawAroundCell(cellX, cellY, rangeCells)`                              | Request render refresh                                     |
| `forEachCellInRectangle(cellX, cellY, widthCells, heightCells, callback)` | Rectangle iteration                                        |
| `forEachCellInCircle(centerCellX, centerCellY, radiusCells, callback)`    | Circle iteration                                           |

Deprecated alias: `forEachCellInRect` → `forEachCellInRectangle`.

`mutate(writer => …)` writer exposes `writer.elements` and `writer.terrains` with `createAtCell`, `replaceAtCell`, and `removeAtCell`.

Bare `api.elements.*` and `api.terrains.*` on main are also deferred.
Main-thread mutators have deprecated `*WhenIdle` aliases (same functions).

Fog terrain ids: `CellType.Fog` (4), `FogJetpackBlock` (5), `FogWater` (6), `FogLava` (13).

## `api.world` (deprecated alias)

Live on renderer 0.5.5.
Official docs mark `api.world` as a deprecated alias of `api.grid` for dims, mutate, and cell queries.
Live object also exposes:

| Key                                                  | Canonical                             |
| ---------------------------------------------------- | ------------------------------------- |
| `runWhenSimulationIdle(callback)`                    | `api.grid.mutate(callback)`           |
| `redrawAroundCellWhenIdle(cellX, cellY, rangeCells)` | `api.grid.redrawAroundCell(…)`        |
| `pickups`                                            | `api.pickups` (same object reference) |

Prefer `api.grid` and `api.pickups` in new mod code.

## `api.constants.physics`

Use with `elements.setPhysicsAtCell(cellX, cellY, physicsState)`.

| Key              | Value |
| ---------------- | ----- |
| `normal`         | 0     |
| `skip`           | 1     |
| `aggressiveSkip` | 2     |

## `api.pickups`

| Method                                              | Role                                             |
| --------------------------------------------------- | ------------------------------------------------ |
| `spawnAtWorld(type, worldX, worldY, data?, light?)` | Spawn pickup (**mutates**); `type`: `PickupType` |
| `remove(pickup)`                                    | Remove pickup                                    |
| `pickUp(pickup)`                                    | Collect to inventory                             |
| `getAll()`                                          | List active pickups                              |
| `getById(pickupId)`                                 | Lookup by id                                     |

Deprecated alias: `destroy(pickup)` → `remove(pickup)`.

`WorldItem`: `{ id, x, y, type, data }`.
Built-in `PickupType`: Artifact (1), GlyphKey (2), Stratacore (3), Orb (4).
Deprecated enum alias: `WorldItemType`.

## Decode without API

When only `__debug` is available, read `__debug.state.shared.sim.cellIds` and decode with id ranges in [Grid and chunks](/okf/world/grid-chunks.md).

## Related concepts

- [Grid iteration](/okf/world/grid-api.md)
- [Elements API](/okf/world/elements.md)
- [Entities: drones and projectiles](/okf/entities/drones-and-projectiles.md) — world pickups overlap
