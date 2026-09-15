---
type: Reference
title: store.world session metadata
description: Live 0.5.5 keys on store.world, player position in shared.playerPos, and separation from shared.sim buffers.
tags:
  - sandustry
  - okf
  - world
  - store
  - session
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:40:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: world-guide
    resource: /guides/world.md
  - id: extract
    resource: sandustry/source/
---

# `store.world`

Session-owned world metadata on `__debug.state.store.world`.
Not the same object as `shared.sim` buffers.

## Keys (live)

Complete key list on **0.5.6** dev-tools save (**1024²**): `size`, `updatedElementIndices`, `deferredChunkReports`, `matrixTraverseDirection`, `horizon`, `groundHorizon`, `fixtures`, `lights`, `sensors`, `teleportZones`.

| Key                        | Live shape (1024 dev save)      | Live shape (3840 campaign)      | Role                       |
| -------------------------- | ------------------------------- | ------------------------------- | -------------------------- |
| `size`                     | `{ width: 1024, height: 1024 }` | `{ width: 3840, height: 3840 }` | World size in cells        |
| `horizon`, `groundHorizon` | arrays, len **width**           | arrays, len 3840                | Per-column horizon heights |
| `matrixTraverseDirection`  | number (1)                      | number (1)                      | Sim traverse direction     |
| `updatedElementIndices`    | array (often empty)             | array                           | Pending element sync list  |
| `deferredChunkReports`     | array (often empty)             | array                           | Chunk report queue         |
| `fixtures`                 | array                           | array, len ~70                  | World fixtures             |
| `lights`                   | array                           | array, len ~438                 | World light records        |
| `sensors`                  | array                           | array, len ≥1                   | World sensors              |
| `teleportZones`            | array                           | array, len ~621                 | Teleport zone defs         |

Buffer headers for sim rasters live under `shared.*`, not `store.world` — [Shared buffer headers](/okf/internals/shared-buffers.md).

## Player position

`shared.playerPos` is array-like.
Index **0** = x px, **1** = y px (not `.x` / `.y`).

Cell coords: `floor(playerPos[0] / config.cellSize)`, same for y.

## Pickups and items

World pickups use `sandkit.api.pickups` (runtime list), not `store.world` keys.

Structures, drones, and pipes live in other `store.*` bags.
See [Engine and workers](/okf/internals/engine-and-workers.md).

## Related concepts

- [Background layers](/okf/world/background-layers.md)
- [Grid and chunks](/okf/world/grid-chunks.md)
