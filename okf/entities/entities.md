---
type: Reference
title: Live entities and capture
description: sandkit.api.entities public methods, engine.api.entities internal surface, creature typeIds, and capture flow.
tags:
  - sandustry
  - okf
  - entities
  - creatures
  - capture
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

# Live entities and capture

Capture critters, swarm particles, and mod-registered entity types.

## Public API (mods)

`sandkit.api.entities` — **main entry only** (not in Worker reference).
Official signatures have **no state-first arg**.

| Method                                       | Role                                       |
| -------------------------------------------- | ------------------------------------------ |
| `getById(entityId)`                          | One live instance by runtime id.           |
| `getAllByType(entityTypeId)`                 | All instances of a string `entityTypeId`.  |
| `spawnAtWorld(entityTypeId, worldX, worldY)` | Create instance (unsafe without user ask). |
| `remove(entityId)`                           | Despawn (unsafe).                          |
| `launch(entityId, angleRadians, speed?)`     | Set motion and launch timers (unsafe).     |
| `startCapture(entityId)`                     | Begin corraller capture (unsafe).          |
| `collect(entityId)`                          | Force conservatory collect (unsafe).       |

There is **no** public `getAll()`.
For read-only probes, use `getAllByType` per known `typeId`, or `engine.api.entities.getAll(state)` below.

Reference: [sandkit.html — api.entities](https://sandustry.com/sandkit.html).

## Engine API (internal)

`sandkit.engine.api.entities` — same domain, **state-first** on most calls.
Still live on 0.5.5.

| Method                                                                    | Role                                  |
| ------------------------------------------------------------------------- | ------------------------------------- |
| `getAll(state)`                                                           | All live entity instances.            |
| `getAllByType(state, typeId)`                                             | Filter by string `typeId`.            |
| `getById(state, entityId)`                                                | One instance.                         |
| `getAllTypeDefs(state?)` / `getTypeDef(typeId)`                           | Registered type metadata.             |
| `getSprite(state, entityId)`                                              | Pixi sprite for one entity.           |
| `spawn(state, typeId, x, y, data?)`                                       | Create (unsafe). Optional 5th `data`. |
| `removeById(state, entityId)`                                             | Despawn (unsafe).                     |
| `launch(state, entity, angle, speed?)` / `launchById(state, entityId, …)` | Launch (unsafe).                      |
| `startCapture(state, entityId)`                                           | Capture (unsafe).                     |
| `collectById(state, entityId)`                                            | Collect (unsafe).                     |
| `registerType` / `registerSpawner`                                        | Mod registration (unsafe).            |
| `createLight`                                                             | Attach point light to entity.         |

Prefer public names for mod code.
Map ids: public `remove`/`collect`/`launch` take `entityId`; engine often takes `state` first.

## Built-in creature `typeId` values (0.5.5)

| typeId        | sortOrder | Notes                                        |
| ------------- | --------- | -------------------------------------------- |
| `shinelet`    | 1         | Small light critter.                         |
| `lumling`     | 2         | Flying critter.                              |
| `resinWeaver` | 3         | Ground critter. Display name "Resin Weaver". |
| `eyes`        | 4         | Small swarm critter.                         |
| `voidgrazer`  | 5         | Large flying critter.                        |

Debug F3 lists "Redweaver" and "Voltblub" as creature buttons.
Those are i18n display names for `resinWeaver` and `eyes` — see [Creature instance fields](/okf/entities/creature-fields.md).
No live `voltblub` or `redweaver` typeId exists.

## Instance fields (common)

| Field             | Type    | Notes                    |
| ----------------- | ------- | ------------------------ |
| `id`              | number  | Runtime id.              |
| `type`            | string  | Same as `typeId`.        |
| `x`, `y`          | number  | World pixels.            |
| `vx`, `vy`        | number  | Velocity (flying types). |
| `capturing`       | boolean | Corraller vacuum active. |
| `captureProgress` | number  | 0-1 during capture.      |
| `lightIndex`      | number? | Attached point light.    |

Per-type fields include `targetX`/`targetY`, `phase`, `orbitRadius`, `direction`, `grounded`, `mode`, etc.
Full tables: [Creature instance fields](/okf/entities/creature-fields.md).

## `store.creatures` vs live entities

- **Live world:** `api.entities.getAllByType(typeId)` or `engine.api.entities.getAll(state)` — instances you can see and capture.
- **Inventory:** `store.creatures[typeId] = { available, found }` — conservatory counts.
  Updated on `entity:collected`.
  First find grants conservatory tickets.

## Capture flow (read-only observation)

1. Corraller tool calls `startCapture` -> sets `capturing`, `captureProgress`.
2. On complete -> increments `store.creatures[typeId]`, may toast first pickup, emits `entity:collected`.
3. Entity removed from the live list.

## Spawners

`registerSpawner(config)` — **not** a callback.
Takes one config object; engine stores it keyed by `typeId`.

| Field | Required | Notes |
| --- | --- | --- |
| `typeId` | yes | Must match a prior `registerType` id. |
| `fogType` | yes | Terrain fog cell type candidates must pass before spawn. |
| `chance` | yes | Per-cell spawn probability when fog clears. |
| `yStartOffsetFromMid` | yes | Minimum Y row (world mid + offset). |
| `cluster` | optional | `{ radius, extraMin, extraMax }` — cluster extra spawns near hits. |
| `storageKey` | optional | Defaults to `typeId`; persists chosen spawn cells under `storage.ensure(state, key).spawnPositions`. |

Runtime spawner state: internal map entry `{ config, spawnKeys: Set<cellIndex> }`.
Fog-reveal pass fills `spawnKeys`, then instantiates via registered type `spawn`.

Prefab `entitySpawns` also place prop entities at map load.
Prop list cached in `storage.ensure(state, "entities")`.

Debug display names: [Creature instance fields](/okf/entities/creature-fields.md).

## Related concepts

- [Entity store keys](/okf/entities/store.md)
- [Swarm console and sweeper](/okf/entities/swarm-sweeper.md)
- [Enums](/okf/entities/enums.md)
- [Gaps](/okf/entities/gaps.md)
