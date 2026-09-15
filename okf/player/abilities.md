---
type: Reference
title: Item abilities
description: Live inventory abilities matrix — AbilityType values and projectileBlueprint attributes per ItemId on Early Access 0.5.6.
tags:
  - sandustry
  - okf
  - player
  - items
  - abilities
status: stable
generated:
  by: agent:live-probe
  at: 2026-09-15T20:00:00Z
sources:
  - id: live-probe
    resource: CDP :9222 __debug.state
---

# Item abilities

`store.player.inventory[].abilities[]` holds runtime ability objects.
Each entry has `type` (`sandkit.enums.AbilityType`) and optional `attributes`.

Probe source: `__debug.state.store.player.inventory` on a mid-progress autosave (32 toolbox rows).

## AbilityType usage (this save)

| `type` | Enum member (typical) | Items on this save |
| --- | --- | --- |
| `1` | Dig | Shovel (`ItemId` 1) — no `attributes` keys |
| `2` | Projectile (or weapon fire) | Gun (6), Rocket launcher (8), Flamethrower (12), Digger (9) — `attributes.projectileBlueprint` |

Tools without combat projectiles (Grabber, Demolisher, Vacuum, Copier, Grappling hook, Cryoblaster, Hauler) have `abilities: []`.
Mod belt items (`itemType: 4`, string ids) also have `abilities: []`; they rely on registered `handleAction` instead.

## `projectileBlueprint` shape (live samples)

Shared wrapper on gun, rocket launcher, flamethrower, and digger abilities:

```ts
{
  opts: { speed, duration?, angle?, noMuzzleFlash?, tracerLight? },
  type: number,          // projectile kind (1 blast, 2 smoke trail, 4 flame, 5 digger bolt, …)
  attributes: { ... }   // per-projectile payload
}
```

| Item | Ability count | Notable `attributes` |
| --- | --- | --- |
| Gun (6) | 3 | `blastRadius: 3`; center shot + `angle: ±5` spread variants |
| Rocket launcher (8) | 1 | `cooldowns.emitSmoke.time: 100` inside projectile `attributes` |
| Flamethrower (12) | 1 | `cooldowns.emitFire.time: 16`; `opts.duration: 0.64`, `noMuzzleFlash: true` |
| Digger (9) | 1 | `hp: 1`; red `tracerLight` on opts |

Gun live `opts.speed` is **600**.
Rocket launcher `opts.speed` **100**, `duration` **3**.
Flamethrower `opts.speed` **240**.
Digger `opts.speed` **300**.

## Per-tool runtime bags

No `session.tools` object on this save (`null`).
Copier source, Digger recall, Teleporter targets, and Hauler route are **not** on `session` top-level keys.
Check mod-specific `store.mods.*` slices when probing those tools.

## Related concepts

- [Items and hotbar](/okf/player/items.md)
- [Player enums](/okf/player/enums.md)
- [Player gaps](/okf/player/gaps.md)
- [Probe](/okf/player/probe.md)
