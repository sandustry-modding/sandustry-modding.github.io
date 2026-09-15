---
type: Reference
title: Entity store keys
description: sandkit.state.store arrays, session caches, and id allocation for drones, projectiles, world items, and related keys.
tags:
  - sandustry
  - okf
  - entities
  - store
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: extract
    resource: sandustry/source/
---

# Entity store keys

`sandkit.state.store` holds live runtime arrays on the **main renderer state**.
Simulation workers receive a worker `State` facade; `store.drones` and `store.projectiles` are referenced in worker bundles for shared sim paths but are **not** exposed on the public worker `sandkit.api` surface.
Treat drones and projectiles as main-thread store arrays for mod reads/writes.
Types: `node_modules/@sandustry-modding/types/src/sandkit/engine/state.d.ts` (thin stubs).

## Entity-related keys

| Key           | Shape                                  | Notes                                                           |
| ------------- | -------------------------------------- | --------------------------------------------------------------- |
| `drones`      | `Drone[]`                              | Autonomous units (digger, hauler, sweeper mod).                 |
| `projectiles` | `Projectile[]`                         | Weapon and tool shots.                                          |
| `worldItems`  | `WorldItem[]`                          | Pickups in the world.                                           |
| `creatures`   | `Record<typeId, { available, found }>` | Conservatory inventory counts. Not live world entities.         |
| `stratacores` | `string[]`                             | Collected stratacore ids (progression), not live pickups.       |
| `gloom`       | `{ emitterPositions: { x, y }[] }`     | Gloom emitter positions. Element detail in [World](/okf/world/grid-and-elements.md). |

## `store.world` (related)

| Key             | Shape            | Notes                                                                     |
| --------------- | ---------------- | ------------------------------------------------------------------------- |
| `teleportZones` | `TeleportZone[]` | Prefab and runtime zones. Bidirectional zones get a linked reverse entry. |

## Session caches

| Key                            | Type            | Notes                                                                          |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------ |
| `session.teleportZoneCache`    | `Fn` (grid map) | Cell -> zone lookup. Built from `store.world.teleportZones` entry rects.       |
| `session.prefabWorldItemCache` | `Fn` (grid map) | Cell -> pending pickup spawn data before fog reveal. Cleared when item spawns. |

## Entity list (not in `store`)

Critters and swarm particles live in `sandkit.api.entities.getAllByType(typeId)` or `sandkit.engine.api.entities.getAll(state)`.

Live 0.5.5 backing list: `store.mods.entities.list` (array of `{ id, type, x, y, ... }`).
Clear with `.length = 0` for void-world wipes.
`engine.api.entities.kill` is **not** on the live API — use list clear, public `remove(entityId)`, or re-probe after updates.

Types doc path `storage.ensure(state, "entities").list` may differ from live mod bag layout.

## IDs

`store.meta.nextId.drone`, `.projectile`, and entity `nextId` allocate runtime ids.

## Sprites

`session.rendering.pixi.sprites.drones[id]`, `.projectiles[id]`, `.worldItems[id]`, `.sprites.entities[id]` mirror store positions each frame.

## Related concepts

- [Live entities and capture](/okf/entities/entities.md)
- [Drones](/okf/entities/drones.md)
- [Projectiles](/okf/entities/projectiles.md)
- [World items](/okf/entities/world-items.md)
- [Teleport zones and portals](/okf/entities/teleport-portals.md)
