---
type: Reference
title: Creature instance fields
description: Per-typeId live entity fields from engine registerType spawn functions in the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - entities
  - creatures
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
---

# Creature instance fields

Built-in critters register through `sandkit.engine.api.entities.registerType`.
Each `spawn(id, x, y)` returns the initial instance object.
Capture fields (`capturing`, `captureProgress`) are set later by corraller flow.

Common fields across types: `id`, `type` (string `typeId`), `x`, `y`, `vx`, `vy`, `targetX`, `targetY`, `targetTimer`, `phase`, `maxSpeed`, `particleAccum`, `age`.

## `shinelet` (sortOrder 1)

Flying light-bug.
Extra fields at spawn:

| Field | Notes |
| --- | --- |
| `orbitCX`, `orbitCY` | Orbit center (starts at spawn position). |
| `orbitAngle` | Random initial angle. |
| `orbitRadius` | Random between configured min/max pixel radii. |

Spawner config: `fogType` Fog, `chance` 1.25e-6, `cluster` radius 20, extra 1–2.

## `lumling` (sortOrder 2)

Underground water-burst critter.
Spawn uses random velocity scaled to ~20% of chosen speed.
No orbit fields.
Spawner: `fogType` FogWater, `chance` 2e-4, `cluster` extra 1 only.

## `resinWeaver` (sortOrder 3)

Ground weaver (display name **Redweaver** in i18n).
Snapped to cell center at spawn.
Extra fields:

| Field | Notes |
| --- | --- |
| `direction` | 0–3 grid step direction. |
| `stepTimer` | Countdown to next step. |
| `stepsLeft` | Steps remaining in burst. |
| `cellX`, `cellY` | Grid coords. |
| `flashTimer`, `cooldownTimer` | Animation / action timers. |

`onInit` resets `particleAccum`, `age`, capture flags, and ensures direction/step timers exist.

## `eyes` (sortOrder 4)

Display name **Voltblub** in i18n.
Grounded electric critter.
Extra fields:

| Field | Notes |
| --- | --- |
| `grounded` | Starts `false`. |
| `anchorSet` | Starts `false`. |
| `sparkCooldown` | From factory helper at spawn. |

Type def sets `stopLaunchOnBlockedCell: true` and `petHeartOffsetYPixels: 30`.

## `voidgrazer` (sortOrder 5)

Large flying void critter.
Extra fields:

| Field | Notes |
| --- | --- |
| `mode` | Starts at 0. |
| `scanTimer` | Randomized scan interval. |
| `cooldownTimer` | Action cooldown. |
| `faceDir` | -1 or 1. |
| `targetCX`, `targetCY` | Secondary target center (initialized 0). |

## Debug F3 labels vs `typeId`

F3 **Game** tab creature buttons use i18n display names.
Spawn calls use the string `typeId` from `registerType`.

| F3 / i18n label | Live `typeId` | `sortOrder` (extract) |
| --- | --- | --- |
| Shinelet | `shinelet` | 1 |
| Lumling | `lumling` | 2 |
| Redweaver | `resinWeaver` | 3 |
| Voltblub | `eyes` | 4 |
| Voidgrazer | `voidgrazer` | 5 |

No separate `redweaver`, `voltblub`, or title-case ids exist in the extract.

## Related concepts

- [Live entities and capture](/okf/entities/entities.md)
- [Entity gaps](/okf/entities/gaps.md)
