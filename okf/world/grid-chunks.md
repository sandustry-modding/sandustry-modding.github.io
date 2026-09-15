---
type: Reference
title: Grid and chunks
description: Live 0.5.5 grid dimensions, chunk layout, cell id encoding, and related shared buffers on shared.sim.
tags:
  - sandustry
  - okf
  - world
  - grid
  - chunks
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

# Grid and chunks

## Config (live 0.5.5)

Read these fields from `__debug.config` only.

| Field                | Live value                     |
| -------------------- | ------------------------------ |
| `cellSize`           | 4 px per cell                  |
| `chunkSize`          | 40 cells                       |
| `useMultithreading`  | true                           |
| `obstacleBreakpoint` | 100 (terrain `materialId` cap) |

## Grid size (live)

Campaign and Void saves allocate **3840 × 3840** cells.
Custom or dev saves can be smaller — the sim, authorization grid, and `mapData` raster all match that save's width and height.

Live 0.5.6 dev-tools autosave (`irishbruse.dev-tools-autosave-1`): **1024 × 1024** cells, `chunkWidth`/`chunkHeight` **26 × 26**, chunk flag arrays len **676** (= 26²).

Formula: `chunkWidth = ceil(width / chunkSize)`, same for height; `chunkShouldUpdate.length = chunkWidth * chunkHeight`.

## `shared.sim` (live)

| Field                                        | Live (3840 campaign)        | Live (1024 dev save) | Role                                        |
| -------------------------------------------- | --------------------------- | -------------------- | ------------------------------------------- |
| `width`, `height`                            | 3840 3840                   | 1024 1024            | Grid size in cells                          |
| `chunkSize`                                  | 40                          | 40                   | Cells per chunk edge (matches config)       |
| `chunkWidth`, `chunkHeight`                  | 96 96                       | 26 26                | Chunk count per axis                        |
| `cellIds`                                    | `Uint32Array`, len 14745600 | len 1048576          | Packed id per cell                          |
| `chunkShouldUpdate`, `chunkShouldUpdateNext` | `Uint8Array`, len 9216      | len 676              | Per-chunk sim dirty flags                   |
| `elementCapacity`                            | 1000000                     | Max element slots                           |
| `liveElementCount`                           | `Uint32Array[1]`            | Active elements (~1.210 in probe)           |
| `idStats`                                    | `Uint32Array`, len 220      | Slab + worker sim counters — see [Sim stats](/okf/world/sim-stats.md) |
| `overflowPool`                               | `Uint32Array`, len 100001   | Element id overflow stack — see [Sim stats](/okf/world/sim-stats.md)  |
| `terrainType`                                | `Uint8Array`, len 1001      | Lookup table for terrain ids 1-1000         |
| `nextDamagedId`, `freeDamagedIds`, `freeDamagedIdCount` | uint32 pools | Damaged-ground id allocator — [Shared buffer headers](/okf/internals/shared-buffers.md) |
| `nextElementSlab`, `elementSlabsExhausted`   | `Uint32Array[1]` each       | Element slab allocator heads                |

Full `elementData` column list: [Shared buffer headers](/okf/internals/shared-buffers.md).

Compute chunk index as `chunkY * chunkWidth + chunkX`.
Compute `chunkX` as `floor(cellX / chunkSize)`.

## Chunk flags vs main-thread mutations (0.5.6 extract)

Two `Uint8Array` flags per chunk: `chunkShouldUpdate` (current frame) and `chunkShouldUpdateNext` (pending).

| Step | When | Effect |
| --- | --- | --- |
| Sim activity | During worker / element update | `reportToChunkAtCellPos` sets `chunkShouldUpdateNext[chunkIndex] = 1` (plus neighbor chunks at edges) |
| Frame open | Start of main `frame:update` | `lX(shared.sim)` copies `chunkShouldUpdateNext` → `chunkShouldUpdate`, then zeroes `chunkShouldUpdateNext` |
| Mutation flush | Immediately after, same frame | `ZG(state)` drains the deferred mutation queue (module 79030) |

Mutation queue flush order inside `ZG`:

1. Per-cell deferred applies (`Lu` queue).
2. `runWhenSimulationIdle` callbacks (`f6` queue).
3. `runAfterMutations` callbacks (`a6` queue).

`sandkit.api.grid.mutate` registers into that queue (main thread only).
Reads inside the mutate callback still see the **pre-flush** grid.
Mutations become visible to sim after the flush runs — **after** chunk flags for this frame were already promoted from `chunkShouldUpdateNext`.
Worker entry grid writes are immediate and do not use this queue.

## Cell id encoding (live)

Extracted bundle constants match live `cellIds` decoding.

| Range                   | Kind                                               |
| ----------------------- | -------------------------------------------------- |
| `0`                     | Empty                                              |
| `1`-`1000`              | Terrain (`CellType` / registered terrain)          |
| `1001`-`1 000 000`      | Damaged ground (hp in `sim.damagedGround`)         |
| `1 000 001`-`2 000 000` | Element slot (`elementIndex = cellId - 1 000 001`) |

Index one cell as `i = cellY * width + cellX`.
Read `cellIds[i]` only.
Do not log the full array.

## Damaged ground

Index `sim.damagedGround.type[]` and `.hp[]` with `cellId - 1001`.

Live sample: cellId 1512 maps to type 2 (Dirt) with hp 3.

## Element slabs

`sim.elementData` holds structure-of-arrays fields.
Full column table (0.5.6 live): [Shared buffer headers](/okf/internals/shared-buffers.md).

Commonly cited fields: `type`, `x`, `y`, `velocityX`, `velocityY`, `isFreeFalling`, `dataField1`-`4`, `durationLeft`, `skipPhysics`.

Live sample: cellId 1001935 maps to index 1934 with element `type` 18 (Petalium).

## Related buffers (same width and height)

| Buffer                  | Ctor         | Notes                         |
| ----------------------- | ------------ | ----------------------------- |
| `shared.wallData.data`  | `Uint8Array` | Wall tile byte per cell       |
| `shared.shadowMap.data` | `Uint8Array` | Terrain shadow value per cell |
| `shared.mapData.data`   | (typed)      | Map metadata raster           |

Sample one index or a coarse stride only.
Do not dump these arrays.

## Related concepts

- [Cells: types, elements, matter](/okf/world/cells.md)
- [Wall, heat, shadows, foliage](/okf/world/wall-heat-foliage.md)
- [Background layers](/okf/world/background-layers.md)
- [Workers and scheduling](/okf/world/workers.md)
