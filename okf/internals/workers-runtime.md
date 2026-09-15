---
type: Reference
title: Workers runtime
description: Simulation, manager, and utility worker boot, thread count, and mod worker sandkit surface from the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - internals
  - workers
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
  - id: worker-runtime
    resource: sandustry/source/dist/js/external-mod-worker-runtime.js
  - id: manager-worker
    resource: sandustry/source/dist/js/manager-worker.js
---

# Workers runtime

Three dedicated game workers load from `sandustry/source/dist/js/`:

| Worker file | `Worker` name | Role |
| --- | --- | --- |
| `simulation-worker.js` | `simulation-worker` | Element sim threads (one worker instance per thread) |
| `manager-worker.js` | `manager-worker` | Manager-side sim coordination |
| `utility-worker.js` | `utility-worker` | Utility-side work and external mod worker entry |

Factory `vi(kind)` picks the script.
When `electron.isFilePatchingActiveSync()` is true, workers load via synchronous XHR + `Blob` URL so patched sources apply.
Otherwise workers use `new Worker(new URL(...))` against the bundled chunk paths.

## Simulation thread count

`yi()` builds the simulation thread list at boot.

Count formula: `Math.max(2, (navigator.hardwareConcurrency || 4) - 2)`, capped at **18**.

Each thread gets:

- Its own `simulation-worker` instance with `meta.startingIndex` and `meta.threadCount`.
- A dedicated `MessageChannel` port to the manager worker.
- Pairwise `MessageChannel` ports to every other simulation thread (full mesh).

Boot docs that mention a fixed **14** threads are outdated for this extract.
Thread count follows hardware.

## Multithreading bag

`environment.multithreading.simulation` holds:

- `manager` — manager worker handle.
- `utility` — utility worker handle.
- `utilityChannel` — `MessageChannel` to utility.
- `threads[]` — simulation worker thread records above.
- `resolvers` — cross-thread RPC completion tracking (`done` vs `threads.length`).
- `postAll(state, message)` — broadcast to all simulation threads (used for launcher registration, tutorial steps, event count clears, structure updates, etc.).

Shared buffers created at boot include `shared.workerCompletion` (size `2 * threadCount * 4` bytes as `Float32Array`).

## External mod worker entry

Simulation and utility workers load chunk **247** (`external-mod-worker-runtime.js`) when executing mod `workerEntry` scripts.

`createExternalWorkerEntryRuntime(state)` builds a per-mod `sandkit` facade:

- Top-level keys: `api`, `apiVersion` (**1**), `engine`, `enums`, `state`.
- `engine.api` is a thin `{ api: sandkitInternal }` wrapper (same pattern as main).
- Worker `sandkit.api` namespaces (frozen facades): `constants`, `collector`, `effects`, `elements`, `events`, `fire`, `grid`, `hooks`, `lights.temporary`, `main.emitEvent`, `maps.getActive`, `patterns`, `player`, `random`, `shared.buffers`, `structures`, `terrains`, `ui.toast`, `utils`, `worker.getIndex` / `getCount`, `world`.

Worker hook/event ids are aliased (`terrain:updated` → `terrain:update`, `worker:update:post` → `update:post`, etc.).

Mod scripts run as `new Function("__sandkit", ...)` with `sourceURL` `sandkit-workshop://<modId>/<entry>`.

Shared buffers use keys `external:<modId>:<name>` and must be created on the main entry before workers load.

## Manager worker JSON

`manager-worker.js` embeds default transport JSON (conveyors, launchers cadence, game-of-life debug patterns).
Launcher velocity defaults for built-in structure ids live there — see [Launchers](/okf/entities/launchers.md).

## Live attach

MCP attach to simulation / manager / utility worker globals is still open on CDP `:9222` (renderer-only targets on 0.5.6).
See [Worker attach](/okf/live/worker-attach.md) for live checks and renderer proxy scripts.
This page documents extract paths and runtime shape only.

## Related concepts

- [Worker entry API](/okf/internals/worker-api.md)
- [Renderer boot](/okf/internals/boot.md)
- [Engine and workers](/okf/internals/engine-and-workers.md)
