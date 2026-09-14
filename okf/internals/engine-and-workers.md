---
type: Reference
title: Engine and workers
description: Index for engine shape, runtime services, and worker mod entry — host globals, hooks, persistence, and thread boundaries.
tags:
  - sandustry
  - okf
  - internals
  - engine
  - workers
  - runtime
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: engine-guide
    resource: /guides/engine.md
  - id: runtime-guide
    resource: /guides/runtime.md
  - id: worker-mods-guide
    resource: /guides/worker-mods.md
---

# Engine and workers

## Trigger

Load this concept when you need the top-level `sandkit` shape, must choose public `sandkit.api` over `sandkit.engine`, register hooks or events, use storage or assets, or add a `workerEntry` script with `WorkerSandkitApi`.[^engine-guide][^runtime-guide][^worker-mods-guide]

## Guide outline

The engine guide explains the injected global `sandkit` object in every mod entry and worker entry script.
It maps `api`, `apiVersion`, `engine`, `enums`, `react`, and `state` and when to prefer public helpers.
It documents `sandkit.engine.api` as a state-first internal twin and lists engine-only namespaces.
It describes top-level state bags under `environment`, `session`, `shared`, and `store`.
It covers runtime enum bags and the separate `window.electron` host bridge.
It notes TypeScript globals and casting `sandkit.api` to `WorkerSandkitApi` in workers.

The runtime guide covers cross-cutting main-thread services unless noted for workers.
It documents `hooks.intercept` and `hooks.modify` with options and unsubscribe returns.
It explains the frozen `events` pub/sub bus with common event ids.
It lists save-scoped and session-local `storage` helpers keyed by mod id.
It covers assets, mod providers, i18n, sound, sprites, schedule, time, and settings namespaces.
It gives a subscribe-on-load and persist-on-change pattern tied to mod lifecycle timing.

The worker mods guide is procedural for simulation-side mods.
It shows `workerEntry` in `modinfo.json` and template build defaults.
It stresses that main and worker `sandkit.api` surfaces overlap but are not interchangeable.
It compares full `SandkitApi` to `WorkerSandkitApi` documentation paths.
It notes shared buffers, paired worker patches, and that worker changes need a game restart after dev hot reload of main scripts.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated top-level and runtime namespaces named in the guides:
  - [sandkit.api](/api/sandkit.api.md) and [sandkit.api.worker](/api/sandkit.api.worker.md)
  - [sandkit.engine](/api/sandkit.engine.md)
  - [sandkit.enums](/api/sandkit.enums.md)
  - [sandkit.react](/api/sandkit.react.md)
  - [sandkit.api.hooks](/api/sandkit.api.hooks.md)
  - [sandkit.api.events](/api/sandkit.api.events.md)
  - [sandkit.api.storage](/api/sandkit.api.storage.md)
  - [sandkit.api.assets](/api/sandkit.api.assets.md)
  - [sandkit.api.mods](/api/sandkit.api.mods.md)
  - [sandkit.api.i18n](/api/sandkit.api.i18n.md)
  - [sandkit.api.sound](/api/sandkit.api.sound.md)
  - [sandkit.api.sprites](/api/sandkit.api.sprites.md)
  - [sandkit.api.schedule](/api/sandkit.api.schedule.md)
  - [sandkit.api.time](/api/sandkit.api.time.md)
  - [sandkit.api.settings](/api/sandkit.api.settings.md)
- Host bridge: [Electron bridge](/electron-bridge.md) — not part of `sandkit`.

## Related domains

- [World: grid and elements](/okf/world/grid-and-elements.md) — worker element hooks and grid mutation rules.
- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — main versus worker factory capability table.
- [Player: inventory and items](/okf/player/inventory-and-items.md) — main-thread-only player namespaces.
- [UI: HUD and overlays](/okf/ui/hud-and-overlays.md) — main-thread React UI versus worker toast.
- [Progression: tech and upgrades](/okf/progression/tech-and-upgrades.md) — events and load timing for registration.

## Sources

[^engine-guide]: Engine and host shape — [/guides/engine.md](/guides/engine.md).
[^runtime-guide]: Runtime services — [/guides/runtime.md](/guides/runtime.md).
[^worker-mods-guide]: Worker mods — [/guides/worker-mods.md](/guides/worker-mods.md).
