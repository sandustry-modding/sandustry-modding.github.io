---
type: Playbook
title: Worker attach
description: CDP limits for simulation, manager, and utility workers — renderer proxy reads and extract paths on 0.5.6.
tags:
  - sandustry
  - okf
  - live
  - workers
  - attach
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:40:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
  - id: live-056
    resource: CDP :9222 0.5.6 session
---

# Worker attach

Chrome DevTools MCP on `:9222` attaches to the **renderer page only**.
Dedicated game workers (`simulation-worker`, `manager-worker`, `utility-worker`) do **not** appear as separate CDP targets on live **0.5.6** (Steam, dev-tools exit save loaded).

Re-checked **2026-09-15** (`/json/list` on `:9222`): still **one** `page` target (`file://…/dist/index.html`).

Use this playbook before assuming worker-thread `sandkit` probes will work.

## What CDP exposes today

| Check | Live 0.5.6 result |
| --- | --- |
| `list_pages` / `/json/list` | **One** target: title **Sandustry**, `file://.../dist/index.html` |
| `Target.setDiscoverTargets` + `Target.getTargets` | Same single `page` target — **no** `worker` rows (2026-09-15 re-check) |
| Renderer `evaluate_script` | `__debug.state` works; ambient `sandkit` **undefined** — see [Evaluate](/okf/live/evaluate.md) |

Worker `Worker` handles **do** exist on the main thread after boot.
They are not debuggable as their own pages with the current Electron CDP setup.

## Worker inventory (renderer proxy)

Run on the attached renderer page (`waitForStableDom: false`):

```javascript
() => {
  const st = globalThis.__debug?.state;
  const sim = st?.environment?.multithreading?.simulation;
  const threads = sim?.threads ?? [];
  return {
    version: globalThis.__debug?.config?.version,
    useMultithreading: globalThis.__debug?.config?.useMultithreading,
    threadCount: threads.length,
    threads: threads.map((t) => ({
      startingIndex: t.meta?.startingIndex,
      threadCount: t.meta?.threadCount,
      portCount: t.meta?.ports?.length ?? 0,
    })),
    hasManager: Boolean(sim?.manager),
    hasUtility: Boolean(sim?.utility),
  };
};
```

Live sample (0.5.6, 14 hardware threads): **14** simulation workers (`startingIndex` 0–13, `threadCount` 14), plus **manager** and **utility** handles.

Thread count follows `max(2, hardwareConcurrency - 2)` capped at **18** — see [Workers runtime](/okf/internals/workers-runtime.md).

## Extract paths (source mining)

Webpack chunk map in `sandustry/source/dist/js/bundle.js`:

| Chunk id | File | Worker `name` option |
| --- | --- | --- |
| 937 | `simulation-worker.js` | `simulation-worker` |
| 147 | `manager-worker.js` | `manager-worker` |
| 360 | `utility-worker.js` | `utility-worker` |

Boot factory `vi(kind)` in the same bundle:

- Normal load: `new Worker(new URL(...), { name })` against bundled chunk URLs.
- File patching active (`electron.isFilePatchingActiveSync()`): sync XHR of `js/<file>` + `Blob` URL worker (sets `self.sandustryWorkerChunkBaseUrl`).

Mod `workerEntry` runtime loads chunk **247** → `external-mod-worker-runtime.js` inside simulation and utility workers.
Facade shape: [Worker entry API](/okf/internals/worker-api.md).

`manager-worker.js` is a small standalone script (conveyor/launcher defaults JSON embedded).
Simulation and utility bundles are large webpack chunks sharing module ids with the main game.

## What you can probe from the renderer

| Goal | Renderer path |
| --- | --- |
| Thread count / ids | `environment.multithreading.simulation.threads[].meta` |
| Scheduling mode | `shared.schedulingMode`, `__debug.getSchedulingMode()` — [Workers and scheduling](/okf/world/workers.md) |
| Chunk sim flags | `shared.sim.chunkShouldUpdate*` |
| Worker timing bags | `shared.workerPerformance`, `workerCompletion`, `managerPerformance` — sample heads only |
| Energy / gold SABs | `shared.energy`, `shared.gold`, … — [Energy probe](/okf/energy/probe.md) |
| Store arrays copied to workers | `store.projectiles`, `store.drones` — main store; not on worker public API — [Entity store keys](/okf/entities/store.md) |
| Mod worker sandkit surface | Read `external-mod-worker-runtime.js` extract — parity table in [Worker entry API](/okf/internals/worker-api.md); not live worker evaluate |

Do not post arbitrary messages to `threads[i].worker` from probes unless the user asks — that mutates sim state.

## What you cannot do yet

- `evaluate_script` inside a simulation, manager, or utility worker global.
- List worker targets on `:9222` (confirmed empty after `Target.setDiscoverTargets`).
- Assume worker-thread `sandkit.api` matches renderer aliases (`api.world`, `WhenIdle`, etc.) — [Worker entry API](/okf/internals/worker-api.md).

Open cross-domain gaps that need worker attach: worker energy sim, worker structure mutations, per-thread chunk ownership, worker copies of upgrades/projectiles — see domain `gaps.md` files.

## If worker CDP appears in a future build

Re-run:

1. `/json/list` — look for `type: "worker"` or dedicated worker URLs (`simulation-worker.js`, etc.).
2. `Target.getTargets` after `Target.setDiscoverTargets({ discover: true })`.
3. Attach with a worker `targetId`, then probe `typeof sandkit`, `sandkit.api.worker.getIndex()`, and `sandkit.api.worker.getCount()`.

Log findings in [Workers runtime](/okf/internals/workers-runtime.md) and this page.

## Related

- [Attach](/okf/live/attach.md) — pick renderer `pageId`
- [Evaluate](/okf/live/evaluate.md) — `__debug.state` entry resolution on 0.5.6
- [Workers runtime](/okf/internals/workers-runtime.md) — boot mesh and `postAll`
- [Feature save setup](/okf/live/feature-save-setup.md) — build saves that exercise worker-side features from the renderer
