---
type: Reference
title: Conservatory
description: Ticket currency, creature counts, conservatory reward tech ids, and appendUnlock API for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - conservatory
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: progression-guide
    resource: /guides/progression.md
---

# Conservatory

Side branch of Research (tickets, creatures, rewards).
Research screen: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## Public API (0.5.5)

`sandkit.api.tech.conservatory.appendUnlock(techId, unlocks)` - append extra unlocks to a conservatory reward tech.

- `techId`: `Tech | string` (built-in or mod id).
- `unlocks.structures` (optional): structure id strings.
- `unlocks.items` (optional): item id strings.

Write - do not call during read-only probes.
Purchased state is still `store.player.tech[id]`.

## Store

```ts
store.conservatory: { tickets: number }
store.creatures: {
  [typeId: string]: { available: number, found: number }
}
```

- **Tickets**: spent on conservatory reward tech.
  First unique creature capture grants `2^n` tickets where `n` is count of species with `found > 0`.
- **Creatures**: `found` is lifetime captures; `available` is spendable count for mechanics that consume critters.

Creature type ids (examples): `lumling`, `shinelet`, `resinWeaver`, `eyes`, `voidgrazer`, `redweaver`, `voltblub`.

## Reward tech ids

Conservatory rewards are tech entries with `currencyType: "ticket"`.
Purchased state is still `store.player.tech[id]`.

| Id (enum or string)    | Ticket cost | Notes                     |
| ---------------------- | ----------- | ------------------------- |
| `ColoringTool` (92)    | 1           |                           |
| `GlassFoundation` (95) | 1           |                           |
| `CritterFence` (110)   | 1           |                           |
| `SignalGate` (93)      | 1           | Door in UI                |
| `GrapplingHook` (94)   | 5           |                           |
| `PrecisionTools` (96)  | 5           |                           |
| `SignalDevices` (97)   | 5           |                           |
| `SignalControls` (98)  | 5           | requires `SignalDevices`  |
| `LogicGates` (99)      | 5           | requires `SignalControls` |
| `WallTool` (101)       | 10          |                           |
| `RetroConsole` (100)   | 20          |                           |

`Corraller` tech (102) unlocks the conservatory tab when researched.

## Session flags

- `session.windows.conservatory.open`
- `session.conservatoryAttention`, `session.conservatoryNewCreature` (first capture UX)
- `store.hints.conservatoryIntroSeen`

Reward purchase is a tech unlock (not a separate store bag).

## Related concepts

- [Tech](/okf/progression/tech.md) — `appendUnlock` and researched state
- [Enums](/okf/progression/enums.md) — `Tech` reward node ids
- [Store cluster](/okf/progression/store.md) — `conservatory` and `creatures` bags
