---
type: Reference
title: Worker entry API
description: Official worker sandkit.api surface, main-thread MCP limits, and engine versus public arity on 0.5.5.
tags:
  - sandustry
  - okf
  - internals
  - workers
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:40:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
---

# Worker entry (official)

Public worker `sandkit.api` is the **Worker entry** section of [official Sandkit](https://sandustry.com/sandkit.html).
The Steam renderer MCP session only sees the **main** object.

Official worker namespaces: `constants`, `collector`, `effects`, `elements` (includes `swapBetweenCells`, `moveBetweenCells`, `markMovementBlockedByIndex`), `events`, `hooks`, `fire`, `patterns`, `player` (read helpers), `random`, `terrains`, `ui.toast`, `utils`, `lights.temporary`, `main.emitEvent`, `maps.getActive`, `worker.getIndex` / `getCount`, `shared.buffers.require`, `structures` (no `register` / `buildAtCell`), `structures.processing.isEnabledAtCell`, `grid` (no `mutate` / `forEachCellIn*`).

Live worker attach (simulation / manager / utility) is still open.
Do not assume main-thread aliases (`api.world`, `api.processing`, `WhenIdle`) exist on workers.

## Main vs worker `sandkit.api` (0.5.6 extract + types)

Main-thread public API: [SandkitApi](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/sandkit-api.d.ts) (~50 namespaces).
Worker public API: [WorkerSandkitApi](https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/sandkit-api.d.ts) (**21** namespaces + deprecated `world` alias).

Mod `workerEntry` loads `external-mod-worker-runtime.js` (chunk **247**).
Its `sandkit.api` keys match the worker type list below (verified on extract **0.5.6**).

| Namespace | Main `sandkit.api` | Worker `sandkit.api` | Notes |
| --- | --- | --- | --- |
| `constants` | yes | yes | Physics skip modes, etc. |
| `collector` | yes | yes | |
| `effects` | yes | yes | Worker: world coords only |
| `elements` | yes | yes | Worker adds `swapBetweenCells`, `moveBetweenCells`, movement-block helpers |
| `events` | yes | yes | Worker uses local adapter + `emitToMain` |
| `fire` | yes | yes | |
| `grid` | yes | yes | Worker: immediate cell ops; **no** `mutate` / `forEachCellIn*` |
| `hooks` | yes | yes | Worker hooks are thread-local copies |
| `lights.temporary` | yes | yes | |
| `main` | no | yes | `emitEvent` to renderer only |
| `maps` | yes | yes | Worker: `getActive` only |
| `patterns` | yes | yes | |
| `player` | yes | yes | Worker: read / collision helpers only |
| `random` | yes | yes | |
| `shared.buffers` | yes | yes | Worker adds `require` for mod SABs |
| `structures` | yes | yes | Worker: **no** `register` / `buildAtCell`; has `processing.isEnabledAtCell` |
| `terrains` | yes | yes | |
| `ui.toast` | yes | yes | |
| `utils` | yes | yes | |
| `worker` | no | yes | `getIndex()` / `getCount()` |
| `world` | yes (deprecated) | yes (deprecated) | Alias of worker `grid` |
| `action`, `assets`, `authorization`, `building`, `blueprints`, `camera`, `cooldown`, `discoveries`, `entities`, `energy`, `excavation`, `factory`, `game`, `gameConfig`, `i18n`, `input`, `items`, `mods`, `pipes`, `pickups`, `processing`, `progression`, `projectiles`, `raycast`, `reactions`, `rendering`, `resources`, `scene`, `schedule`, `settings`, `signals`, `sound`, `sprites`, `storage`, `structureBehaviors`, `tech`, `time`, `tools`, `triggers`, `upgrades`, `workers` | yes | **no** | Main-thread or renderer-only |

Live worker evaluate is **not** available on CDP `:9222`.
Treat this table and the extract facade as authoritative until worker CDP attach exists — [Worker attach](/okf/live/worker-attach.md).

## Extract worker sandkit (mod `workerEntry`)

Source: `sandustry/source/dist/js/external-mod-worker-runtime.js`.
Loaded inside simulation and utility workers for external mod scripts.

Top-level: `api`, `apiVersion` **1**, `engine`, `enums`, `state`.
Worker `sandkit.api` namespaces: `constants`, `collector`, `effects`, `elements`, `events`, `fire`, `grid`, `hooks`, `lights.temporary`, `main`, `maps`, `patterns`, `player`, `random`, `shared.buffers`, `structures`, `structures.processing`, `terrains`, `ui.toast`, `utils`, `worker`, `world`.

There is no worker `entities`, `projectiles`, `pickups`, or `drones` namespace on this facade.
Thread index: `sandkit.api.worker.getIndex()` / `getCount()`.

### Worker `api.player` (extract + 0.5.6)

Read-only helpers on worker `sandkit.api.player`:

| Method | Maps to |
| --- | --- |
| `getPositionAtWorld()` | `engine.api.player.getPosition(state)` |
| `getWorldPosition()` | same reference as `getPositionAtWorld` |
| `isCollidingWithCell(x, y)` | `engine.api.player.isCollidingWithCell(state, x, y)` |
| `isWithinRadiusOfCell(x, y, r)` | `engine.api.player.isWithinRadius(state, x, y, r)` |

No mutators or inventory helpers on workers.
Details: [Player state and API](/okf/player/player.md?id=worker-sandkitapiplayer-read-only).

Boot and thread mesh: [Workers runtime](/okf/internals/workers-runtime.md).

## Engine vs public arity (live main, 0.5.5)

| Call                      | Public                                                                       | Engine                                                                                |
| ------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| entities spawn            | `spawnAtWorld` arity **3**                                                   | `spawn` arity **4** (state first)                                                     |
| factory `getLevel`        | arity **0**                                                                  | arity **1** (state)                                                                   |
| factory `getProcessCount` | arity **1** (process id required)                                            | present on engine                                                                     |
| pipes                     | `isAtCell`, `isEnabledAtCell`, `getConnectedVentsAtCell`, `setEnabledAtCell` | `isAt`, `isEnabledAt`, `getConnectedVentsAt`, `setEnabledAt`                          |
| blueprints                | `serializeStructures`, `localizeStructures`                                  | `save`, `load`, `delete`, `getAll`, `exportString`, `importString`, `exportAllString` |
