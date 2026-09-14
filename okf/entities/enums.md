---
type: Reference
title: Entity enums
description: sandkit.enums DroneType, ProjectileType, PickupType, and creature typeId strings.
tags:
  - sandustry
  - okf
  - entities
  - enums
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

# Entity enums

Live on `sandkit.enums` (0.5.5).
Reference: [sandkit.html](https://sandustry.com/sandkit.html) and `node_modules/@sandustry-modding/types/src/sandkit/enums/index.d.ts`.

## DroneType

Autonomous drone kinds in `store.drones[].type`.

| Member | Value |
| ------ | ----- |
| Digger | 1     |
| Hauler | 2     |

Sweeper drones use a mod string type, not this enum.

## ProjectileType

`store.projectiles[].type`.

| Member        | Value |
| ------------- | ----- |
| Bullet        | 1     |
| Rocket        | 2     |
| GrapplingHook | 3     |
| Fire          | 4     |
| Digger        | 5     |
| Mod           | 6     |

Mod projectiles set `type: Mod` and carry `mods` payload keyed by registered string id.

## PickupType

`store.worldItems[].type` and `pickups.spawnAtWorld` first arg.

| Member     | Value |
| ---------- | ----- |
| Artifact   | 1     |
| GlyphKey   | 2     |
| Stratacore | 3     |
| Orb        | 4     |

## Creature typeIds (not enums)

String keys in `entities` and `store.creatures`: `lumling`, `shinelet`, `resinWeaver`, `eyes`, `voidgrazer`.
See [Live entities and capture](/okf/entities/entities.md).

## Related concepts

- [Drones](/okf/entities/drones.md)
- [Projectiles](/okf/entities/projectiles.md)
- [World items](/okf/entities/world-items.md)
