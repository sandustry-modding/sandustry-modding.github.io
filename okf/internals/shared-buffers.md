---
type: Reference
title: Shared buffer headers
description: Typed-array shapes for shared.sim, elementData, damagedGround, related shared rasters, and store.world metadata — headers only, no full dumps.
tags:
  - sandustry
  - okf
  - internals
  - state
  - buffers
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:40:00Z
sources:
  - id: live-056
    resource: CDP :9222 0.5.6 dev-tools save (1024²)
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
---

# Shared buffer headers

OKF records **constructor, length, and role** for large typed arrays.
Do not log full `cellIds`, `elementData.*`, or horizon arrays in probes.

Live sample: **0.5.6**, **1024 × 1024** dev-tools save (`irishbruse.dev-tools-exitsave`).
Campaign **3840 × 3844** saves scale lengths by `width * height` (see formulas below).

Probe entry: `__debug.state` on CDP `:9222` — [Evaluate](/okf/live/evaluate.md).

## `shared.sim` scalars

| Field | Live (1024) | Scales with |
| --- | --- | --- |
| `width`, `height` | 1024 | Save / map size |
| `chunkSize` | 40 | `__debug.config.chunkSize` |
| `chunkWidth`, `chunkHeight` | 26, 26 | `ceil(width / chunkSize)` |
| `elementCapacity` | 1 000 000 | Fixed at boot |
| `liveElementCount[0]` | Active element count | Runtime |

## `shared.sim` top-level buffers

| Field | Constructor | Length (1024 save) | Length formula |
| --- | --- | --- | --- |
| `cellIds` | `Uint32Array` | 1 048 576 | `width * height` |
| `chunkShouldUpdate` | `Uint8Array` | 676 | `chunkWidth * chunkHeight` |
| `chunkShouldUpdateNext` | `Uint8Array` | 676 | same |
| `terrainType` | `Uint8Array` | 1001 | Fixed lookup table (terrain ids 1–1000) |
| `idStats` | `Uint32Array` | 220 | `ceil(elementCapacity / 10 000) + 120` — [Sim stats](/okf/world/sim-stats.md) |
| `overflowPool` | `Uint32Array` | 100 001 | Fixed — [Sim stats](/okf/world/sim-stats.md) |
| `liveElementCount` | `Uint32Array` | 1 | Atomic counter |
| `nextElementSlab` | `Uint32Array` | 1 | Slab allocator head |
| `elementSlabsExhausted` | `Uint32Array` | 1 | Slab exhaustion flag |
| `nextDamagedId` | `Uint32Array` | 1 | Damaged-ground id allocator |
| `freeDamagedIds` | `Uint32Array` | 999 000 | Damaged-ground free stack |
| `freeDamagedIdCount` | `Uint32Array` | 1 | Stack depth |

Cell id encoding: [Grid and chunks](/okf/world/grid-chunks.md).

## `shared.sim.elementData` (structure-of-arrays)

All columns length **`elementCapacity`** (1 000 000 on live builds).

| Field | Constructor | Notes |
| --- | --- | --- |
| `type` | `Uint8Array` | Element type id |
| `x`, `y` | `Uint16Array` | Cell coordinates |
| `velocityX`, `velocityY` | `Float32Array` | px/s or sim units |
| `minVelocityX`, `minVelocityY` | `Float32Array` | Velocity clamps |
| `thresholdX`, `thresholdY` | `Float32Array` | Movement thresholds |
| `hasBeenUpdated` | `Uint8Array` | Tick dirty flag |
| `isFreeFalling` | `Uint8Array` | Physics state |
| `density` | `Float32Array` | Matter density |
| `variantIndex` | `Uint8Array` | Visual variant |
| `durationMax`, `durationLeft` | `Float32Array` | Timed elements |
| `skipPhysics` | `Uint8Array` | Physics opt-out |
| `movesYAxis`, `movesYAxisCount` | `Uint16Array` | Vertical move tracking |
| `lastSideChecked` | `Int16Array` | Collision side |
| `linkedElementIndex` | `Uint32Array` | Paired element index |
| `hasDuration` | `Uint8Array` | Duration active |
| `dataField1`, `dataField3` | `Uint16Array` | Mod / vanilla data slots |
| `dataField2` | `Int16Array` | Signed data slot |
| `dataField4` | `Float32Array` | Float data slot |

Index an element with `elementIndex = cellId - 1 000 001`.
Sample one index only in probes.

## `shared.sim.damagedGround`

| Field | Constructor | Length (1024 save) |
| --- | --- | --- |
| `type` | `Uint8Array` | 999 000 |
| `hp` | `Uint16Array` | 999 000 |

Index with `cellId - 1001` when `1001 ≤ cellId ≤ 1 000 000`.

## Related `shared.*` rasters (same width / height as sim)

| Bag | Fields | Constructor / length (1024) |
| --- | --- | --- |
| `mapData` | `data`, `width`, `height` | `Uint8Array` len **4 194 304** (= `width * height * 4`) |
| `wallData` | `data`, `width`, `height`, `paletteData` | `data`: `Uint8Array` len **1 048 576**; `paletteData`: len **1020** |
| `shadowMap` | `data`, `width`, `height` | `Uint8Array` len **1 048 576** |
| `authorization` | `data`, `width`, `height` | `Uint8Array` len **1 048 576** — zone id per cell |
| `waterPresenceZones` | `data`, `waterPresenceZonesWidth`, `waterPresenceZonesHeight` | `Uint8Array` len **1024**; zone grid **32 × 32** on 1024-wide maps |

Zone grid: `zoneCols = floor(width / 32)`, `zoneRows = floor(height / 32)`.
3840-wide campaign saves use **120 × 120** zones — [Sim stats](/okf/world/sim-stats.md).

## Scheduling atomics

| Field | Constructor | Length |
| --- | --- | --- |
| `schedulingMode` | `Uint8Array` | 1 |
| `hybridScheduling` | `Uint8Array` | 1 |

Layout: [Workers and scheduling](/okf/world/workers.md).

## `store.world` (metadata, not sim buffers)

Session-owned object on `__debug.state.store.world`.
No typed-array cell rasters here — those live under `shared.sim` / `shared.mapData`.

| Key | Live shape (1024 save) | Role |
| --- | --- | --- |
| `size` | `{ width, height }` | World size in cells |
| `horizon`, `groundHorizon` | `number[]`, len **width** | Per-column silhouette heights |
| `matrixTraverseDirection` | number | Sim traverse direction |
| `updatedElementIndices` | array | Pending element sync list |
| `deferredChunkReports` | array | Chunk report queue |
| `fixtures` | object[] | World fixture records |
| `lights` | object[] | World light records |
| `sensors` | object[] | Artifact / sensor placements |
| `teleportZones` | object[] | Teleport zone defs |

Campaign saves add rows and non-empty decor arrays — [store.world session metadata](/okf/world/store-world.md).

## Agent limits

- Never paste full buffer dumps into OKF or probe logs.
- Lengths change with save grid size; always read `width` / `height` first.
- Worker threads read the same SharedArrayBuffers; renderer `__debug.state` is the supported probe path until worker CDP exists — [Worker attach](/okf/live/worker-attach.md).

## Related

- [State bags](/okf/internals/state.md)
- [Grid and chunks](/okf/world/grid-chunks.md)
- [Sim stats buffers](/okf/world/sim-stats.md)
- [Gaps](/okf/internals/gaps.md)
