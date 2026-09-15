---
type: Reference
title: Workers and scheduling
description: Live 0.5.5 multithreading config, simulation worker threads, shared scheduling fields, and chunk sim flags.
tags:
  - sandustry
  - okf
  - world
  - workers
  - scheduling
  - chunks
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

# Workers and scheduling

## Config

`__debug.config.useMultithreading` — **true** (live 0.5.6, CDP `:9222`).
Game version on probe save: **0.5.6**.

## `environment.multithreading.simulation` (live)

| Part                        | Role                             |
| --------------------------- | -------------------------------- |
| `manager`                   | Sim manager worker handle        |
| `utility`, `utilityChannel` | Utility worker side channel      |
| `threads`                   | **14** entries                   |
| `resolvers`                 | Promise resolvers for worker RPC |

Each `threads[i].meta`:

| Field           | Live                 |
| --------------- | -------------------- |
| `startingIndex` | 0 ... 13 (thread id) |
| `threadCount`   | 14                   |
| `ports`         | 14 MessagePorts      |
| `managerPort`   | Manager port         |

Thread `meta.startingIndex` is the worker id **0..13**, not a Y-band start.

## Per-thread column ownership (0.5.6 extract)

Simulation partitions work by **chunk column index on X**, not by cell Y band.
Helpers live in the main bundle (`isChunkIndexInThread`, `isCellXInThread`, `getThreadIndexFromCellX`).
`chunkSize` is **40** (`__debug.config.chunkSize`).

| Helper | Formula (symbols) |
| --- | --- |
| `getThreadColumnSize()` | `2 * chunkSize` → **80** cells per thread column |
| `getNumberOfThreadColumns(state)` | `floor(world.width / getThreadColumnSize())` |
| `getThreadIndexFromCellX(cellX, threadCount)` | `floor(cellX / (2*chunkSize)) % threadCount` → `floor(cellX / 80) % threadCount` on live config |
| `isChunkIndexInThread(chunkIndex, threadIndex, threadCount)` | `2 * floor(chunkIndex / 2) % (2 * threadCount) == 2 * threadIndex` |
| `isCellXInThread(cellX, threadIndex, threadCount)` | `isChunkIndexInThread(floor(cellX/chunkSize), threadIndex, threadCount)` |
| `isCellXAtThreadSeam(cellX)` | `cellX === floor(cellX/(2*chunkSize))*(2*chunkSize)` or `cellX === that + (2*chunkSize - 1)` |

On a **1024**-wide dev save with **14** threads: `floor(1024/80) = 12` thread columns; index wraps with `% 14`.
Workers also receive per-column `MessagePort` meshes at boot (`threads[i].meta.ports`).

Worker-thread `sandkit.api` omits `grid.mutate` and `energy.*` — see [Worker entry API](/okf/internals/worker-api.md).
Internal `sandkit.engine.api.energy` still runs inside simulation workers for storage ticks and `shared.energyChange` — see [Engine energy](/okf/energy/engine-energy.md).

## Shared scheduling fields

On **`shared`**, not `__debug.config` (config has no scheduling keys on live 0.5.5).

JSON often prints `{ "0": 1 }` because these are **length-1 typed arrays**, not per-worker maps.

| Field                         | Live                      | Notes                                                                        |
| ----------------------------- | ------------------------- | ---------------------------------------------------------------------------- |
| `shared.schedulingMode`       | `Uint8Array` length **1** | Index 0 is **1** on this save                                                |
| `shared.hybridScheduling`     | `Uint8Array` length **1** | Index 0 is **1** on this save                                                |
| `__debug.getSchedulingMode()` | returns **1**             | Same value as `schedulingMode[0]`. Do not call `setSchedulingMode` in probes |

Do not call `__debug.setSchedulingMode` without user ask.

## Chunk sim flags

`shared.sim.chunkShouldUpdate` and `chunkShouldUpdateNext` — `Uint8Array`, len **`chunkWidth * chunkHeight`**.

3840-grid save: len **9216** (= 96 × 96 chunks).
1024-grid dev save: len **676** (= 26 × 26 chunks).

Value **1** = chunk marked for update (live sample at map center chunk).

## Performance bags

`shared.workerPerformance` (len 56), `workerDetailPerformance`, `workerCompletion`, `workQueue`, `managerPerformance` — timing and queues.
Do not dump.

## Public mod API

`sandkit.api.workers.setPostUpdateEnabled(enabled)` — toggle worker post-update hooks only.

Worker-thread `sandkit` shape: see [Engine and workers](/okf/internals/engine-and-workers.md).

## Related concepts

- [Grid and chunks](/okf/world/grid-chunks.md)
- [Sim stats buffers](/okf/world/sim-stats.md)
- [Open gaps](/okf/world/gaps.md)
