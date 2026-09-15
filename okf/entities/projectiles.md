---
type: Reference
title: Projectiles
description: store.projectiles model, sandkit.api.projectiles public methods, and mod projectile registration.
tags:
  - sandustry
  - okf
  - entities
  - projectiles
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

# Projectiles

## Store model

`store.projectiles` — active shots.
Common fields (live 0.5.5):

| Field                | Type                  | Notes                                                              |
| -------------------- | --------------------- | ------------------------------------------------------------------ |
| `id`                 | number                | From `store.meta.nextId.projectile`.                               |
| `type`               | number                | `sandkit.enums.ProjectileType`.                                    |
| `x`, `y`             | number                | World pixels.                                                      |
| `initialAngle`       | number                | Degrees at spawn.                                                  |
| `velocity`           | `{ x, y }`            | Current motion.                                                    |
| `threshold`          | `{ x, y }`            | Hit detection offset.                                              |
| `duration`           | `{ max, left? }`      | Lifetime. `-1` = no expiry.                                        |
| `bounce`             | `{ enabled, factor }` | Wall bounce.                                                       |
| `gravity`            | `{ enabled, factor }` | Gravity toggle.                                                    |
| `rotateWithVelocity` | boolean               | Sprite rotation.                                                   |
| `ignoreUpgrades`     | boolean               | Skip upgrade modifiers.                                            |
| `attributes`         | object                | Per-type data (see below). |
| `mods`               | object?               | When `type === Mod`, keyed by mod projectile id.                   |

Sprite key: `session.rendering.pixi.sprites.projectiles[id]`.
Built-in texture map: Bullet -> `"bullet"`, Rocket -> `"rocket"`, Digger -> `"digger"`.

## Built-in `attributes` (extract)

| Type | Keys set at spawn / sim |
| --- | --- |
| **GrapplingHook** | `{}` at fire — state lives on `store.player.grapplingHook` (`fireTime`, `eyelet` world point). Projectile removed when hook ends. |
| **Fire** | Nested under flamethrower blueprint: `cooldowns.emitFire: { time, last }`. Duration scaled by `upgrades.flamethrower.range`. Emits short-lived lights on cooldown tick. |
| **Digger** | `hp` (= digger upgrade level + 1), `distanceOriginX/Y`, `trajectoryOriginX/Y`; sim adds `gravityBounce`, `bounced`, `despawning`, `despawnTimer` when travel exceeds max radius. |
| **Rocket** | `napalm: true` when rocket warhead augment is owned. |

Mod projectiles store custom keys on `attributes` and/or `mods[<id>]`.

## Public API

`sandkit.api.projectiles` — preferred for mods.

| Method                                                  | Role                                         |
| ------------------------------------------------------- | -------------------------------------------- |
| `register(definition)`                                  | Add to `sandkit.mods.projectiles`.           |
| `getDefinitionById(projectileId)`                       | Lookup mod definition.                       |
| `createBlueprintById(projectileId)`                     | Build spawn blueprint (`opts`, `type: Mod`). |
| `getAll()`                                              | `store.projectiles`.                         |
| `getById(projectileId)`                                 | One instance.                                |
| `spawnAtWorld(worldX, worldY, angleRadians, blueprint)` | Spawn (unsafe without user ask).             |
| `remove(projectile)`                                    | Despawn (unsafe).                            |

Deprecated alias: `createBlueprintFromId(projectileId)` -> use `createBlueprintById`.

Engine overlap exposes `createBlueprint` and `spawn` with state-first signatures.
Prefer public names above.

Reference: [sandkit.html — api.projectiles](https://sandustry.com/sandkit.html).

## Engine-only

No `sandkit.engine.api.projectiles` namespace.
Projectile sim lives in the main store push/filter helpers.

## Related concepts

- [Entity store keys](/okf/entities/store.md)
- [Enums](/okf/entities/enums.md)
- [Gaps](/okf/entities/gaps.md)
