---
type: Reference
title: Swarm console and sweeper
description: engine.api.swarmConsole convergence minigame, sweeperDrone selection cancel, and sweeper drone store entries.
tags:
  - sandustry
  - okf
  - entities
  - swarm
  - sweeper
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: extract
    resource: sandustry/source/
---

# Swarm console and sweeper

## `swarmConsole`

`sandkit.engine.api.swarmConsole` — retro swarm convergence minigame.
State-first.

| Method                                 | Read? | Role                                               |
| -------------------------------------- | ----- | -------------------------------------------------- |
| `getCrystalMined(state)`               | yes   | Shared worker atomic counter.                      |
| `getRadiusPx(state)`                   | yes   | Effect radius from mined crystals.                 |
| `getDiskRadiusCells()`                 | yes   | Disk radius in cells (live: scales with progress). |
| `getPlacedConsoles(state)`             | yes   | `{ x, y }[]` of placed console structures.         |
| `getNearestConvergence(state, wx, wy)` | yes   | Closest convergence point + gate circle.           |
| `getPendingConvergence(state)`         | yes   | Active target or `null`.                           |
| `isSpawnJammed(state)`                 | yes   | Spawn blocked flag.                                |
| `getEntityType(typeId)`                | yes   | Swarm particle type def.                           |
| `setSpawnJammed`                       | no    | Block spawns.                                      |
| `resetAllConvergenceBuffers`           | no    | Clear pending buffer.                              |
| `decrementConvergenceBuffer`           | no    | Step convergence.                                  |
| `registerEntityType`                   | no    | Register swarm particle visuals.                   |

Event: `swarmConsole:crystalMinedChanged` on shared counter update.
Swarm entities use the same `entities` system with types registered here.

Live example (maxed save): `crystalMined: 10000`, `radiusPx: 320`, `diskRadiusCells: 61`, `placedConsoles: 0`.

## `sweeperDrone`

`sandkit.engine.api.sweeperDrone` — one method:

| Method                   | Read? | Role                                   |
| ------------------------ | ----- | -------------------------------------- |
| `cancelSelection(state)` | no    | Cancel active drop-off selection mode. |

Sweeper **drones** are normal `store.drones` entries from the sweeper launcher item.
See [Drones](/okf/entities/drones.md).
Config namespace: `sandkit.config("sweeperDrone")`.
No separate store key.

## Related concepts

- [Live entities and capture](/okf/entities/entities.md)
- [Drones](/okf/entities/drones.md)
