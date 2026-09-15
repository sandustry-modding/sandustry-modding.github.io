---
type: Reference
title: Namespace routing
description: Map sandkit.api namespaces to OKF domains and generated /api/ pages.
tags:
  - sandustry
  - okf
  - api
  - routing
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:30:00Z
---

# Namespace routing

Use this table to pick **one** OKF domain after [consume](/okf/consume.md).
Generated member lists: `/api/sandkit.api.<ns>.md` or [/types/search.md](/types/search.md).

`sandkit.engine.api.*` twins are documented under [Internals](/okf/internals/index.md) when they are state-first or engine-only.
Prefer public `sandkit.api.*` in mod code.

## World and simulation

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `grid` | World | [Grid, world alias, and pickups](/okf/world/world-api.md) |
| `world` (deprecated) | World | Same — alias of `grid` mutate/dims + `pickups`, `*WhenIdle` |
| `elements` | World | [Elements](/okf/world/elements.md) |
| `terrains` | World | [Terrains](/okf/world/terrains.md) |
| `excavation` | World | [Grid and elements](/okf/world/grid-and-elements.md) |
| `reactions` | World | [Grid and elements](/okf/world/grid-and-elements.md) |
| `fire` | World | [Grid and elements](/okf/world/grid-and-elements.md) |
| `maps` | World | [Maps API](/okf/world/maps.md) |
| `constants` | World | [World API](/okf/world/world-api.md) (`physics`, cell sizes) |
| `workers` | World | [Workers and scheduling](/okf/world/workers.md) |
| `hooks` | World | [Workers and scheduling](/okf/world/workers.md) |
| `events` | World | [Workers and scheduling](/okf/world/workers.md) |
| `schedule` | World | [Workers and scheduling](/okf/world/workers.md) |
| `patterns` | World | [Grid and elements](/okf/world/grid-and-elements.md) |
| `random` | World | [Grid and elements](/okf/world/grid-and-elements.md) |
| `raycast` | World | [Grid and elements](/okf/world/grid-and-elements.md) |

## Factory and structures

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `structures` | Factory | [Structures](/okf/factory/structures.md) |
| `structureBehaviors` | Factory | [Conveyors](/okf/factory/conveyors.md) |
| `processing` | Factory | [Processing](/okf/factory/processing.md) |
| `pipes` | Factory | [Pipes](/okf/factory/pipes.md) |
| `factory` | Factory | [Factory level and processes](/okf/factory/factory.md) |
| `authorization` | Factory | [Authorization zones](/okf/factory/authorization.md) |
| `building` | Factory / Player | [Building mode](/okf/player/building.md), [Placement config](/okf/factory/placement-config.md) |
| `blueprints` | Factory | [Blueprints](/okf/factory/blueprints.md) |
| `collector` | Factory / Energy | [Collector](/okf/factory/collector.md), [Gold collector](/okf/energy/gold-collector.md) |
| `queue` | Factory | [Queue](/okf/factory/queue.md) |

## Energy and signals

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `energy` | Energy | [sandkit.api.energy](/okf/energy/api-energy.md) |
| `signals` | Energy | [sandkit.api.signals](/okf/energy/api-signals.md) |
| `resources` | Energy | [sandkit.api.resources](/okf/energy/api-resources.md) |

Engine-only twins (`engine.api.energy`, signal runtime `Jd.Q`): [Engine energy](/okf/energy/engine-energy.md), [Engine signals](/okf/energy/engine-signals.md).

## Player and input

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `player` | Player | [Player state](/okf/player/state.md) |
| `player.inventory` | Player | [Inventory and items](/okf/player/inventory-and-items.md) |
| `player.buildings` | Player | [Building mode](/okf/player/building.md) |
| `tools` | Player | [Tools and grabber](/okf/player/tools.md) |
| `input` | Player | [Input](/okf/player/input.md) |
| `camera` | Player | [Camera](/okf/player/camera.md) |
| `action` | Player | [Action](/okf/player/action.md) |
| `items` | Player | [Items](/okf/player/items.md) |
| `cooldown` | Player | [Player](/okf/player/player.md) |

Engine-only coloring tools: [Coloring](/okf/player/coloring.md).

## UI and presentation

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `ui` | UI | [HUD and overlays](/okf/ui/hud-and-overlays.md) |
| `ui.regions` | UI | [Overlay API](/okf/ui/overlay-api.md) |
| `ui.hotbar` | UI | [Toolbox](/okf/ui/toolbox.md) |
| `ui.components` | UI | [Overlay API](/okf/ui/overlay-api.md) |
| `ui.navigation` | UI | [Overlay API](/okf/ui/overlay-api.md) |
| `ui.overrides` | UI | [Overlay API](/okf/ui/overlay-api.md) |
| `scene` | UI | [DOM and scenes](/okf/ui/dom.md) |
| `i18n` | UI | [Screens](/okf/ui/screens.md) |
| `sound` | UI | [Feedback](/okf/ui/feedback.md) |
| `effects` | UI / World | [Feedback](/okf/ui/feedback.md) (VFX); worker hooks in [World workers](/okf/world/workers.md) |
| `rendering` | UI | [HUD](/okf/ui/hud.md) |
| `sprites` | UI | [HUD](/okf/ui/hud.md) |
| `lights` | UI / World | [Background layers](/okf/world/background-layers.md) |

## Progression

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `tech` | Progression | [Tech](/okf/progression/tech.md) |
| `tech.conservatory` | Progression | [Conservatory](/okf/progression/conservatory.md) |
| `upgrades` | Progression | [Upgrades](/okf/progression/upgrades.md) |
| `discoveries` | Progression | [Discoveries](/okf/progression/discoveries.md) |
| `progression` | Progression | [Objectives](/okf/progression/objectives.md) |

Built-in tech grid data (not a public API): webpack module **77135** — [Tech tree structure](/okf/progression/tech-tree.md).

## Entities and combat

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `entities` | Entities | [Entities](/okf/entities/entities.md) |
| `projectiles` | Entities | [Projectiles](/okf/entities/projectiles.md) |
| `pickups` | Entities | [World items](/okf/entities/world-items.md) |

Drones and launchers are engine-first: [Drones](/okf/entities/drones.md), [Launchers](/okf/entities/launchers.md).

## Host, mods, and meta

| `sandkit.api` namespace | OKF domain | Concept entry |
| --- | --- | --- |
| `game` | Internals | [Engine API](/okf/internals/engine.md) (`start` is a mutator) |
| `gameConfig` | Internals | [Engine config](/okf/internals/engine-config.md) |
| `mods` | Internals | [Mods host](/okf/internals/mods-host.md) |
| `settings` | Internals | [State bags](/okf/internals/state.md) |
| `shared` | Internals | [State bags](/okf/internals/state.md), [Shared buffers](/okf/world/workers.md) |
| `assets` | Internals | [Mods host](/okf/internals/mods-host.md) |
| `storage` | Internals | [State bags](/okf/internals/state.md) |
| `utils` | API | Generated [/api/sandkit.api.utils.md](/api/sandkit.api.utils.md) |
| `triggers` | World | [Grid and elements](/okf/world/grid-and-elements.md) |
| `time` | Internals | [State bags](/okf/internals/state.md) |

## Worker entry subset

Official worker namespaces are a **subset** of the main table.
See [Worker entry API](/okf/internals/worker-api.md) for the exact list.
Worker facade also exposes deprecated `api.world` — prefer `api.grid` on workers.

## `sandkit.engine` (not `api`)

| Path | OKF domain | Concept entry |
| --- | --- | --- |
| `sandkit.engine.api` | Internals | [Engine API](/okf/internals/engine.md) |
| `sandkit.engine.config` / `extend` | Internals | [Engine config and extend](/okf/internals/engine-config.md) |
| `sandkit.engine.state` | Internals | Same object as `sandkit.state` — [State bags](/okf/internals/state.md) |
| `sandkit.enums` | Domain enums | Each domain `enums.md` or generated `/api/sandkit.enums.*` |
| `sandkit.react` | UI | [Overlay API](/okf/ui/overlay-api.md) |

Webpack shortcut to `engine.api` on CDP: module **46781** export `FH` — [Webpack module ids](/okf/internals/webpack-modules.md).

## Related

- [API gaps](/okf/api/gaps.md)
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md)
- [Generated docs](/okf/api/generated-docs.md)
