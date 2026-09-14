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

`__debug.config.useMultithreading` — **true** (live).

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
Row/chunk ownership formula is still unknown — see [Open gaps](/okf/world/gaps.md).

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

`shared.sim.chunkShouldUpdate` and `chunkShouldUpdateNext` — `Uint8Array`, len **9216** (= 96 chunks).

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
