---
type: Reference
title: Conservatory
description: Ticket currency, creature roster, ticket curve, reward tech ids, and appendUnlock API from the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - progression
  - conservatory
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
---

# Conservatory

Side branch of Research (tickets, creatures, rewards).
Research screen: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## Public API

`sandkit.api.tech.conservatory.appendUnlock(techId, unlocks)` — append extra unlocks to a conservatory reward tech.

- `techId`: `Tech | string` (built-in or mod id).
- `unlocks.structures` (optional): structure id strings.
- `unlocks.items` (optional): item id strings.

Write — do not call during read-only probes.
Purchased state is still `store.player.tech[id]`.

## Store

```ts
store.conservatory: { tickets: number }
store.creatures: {
  [typeId: string]: { available: number, found: number }
}
```

- **`found`**: lifetime unique captures (first-time flag uses `found === 0` before increment).
- **`available`**: spendable count for corraller / mechanics that consume critters.
- **Tickets**: spent on conservatory reward tech (`currencyType: "ticket"`).

### Ticket curve (first capture only)

On collect, when the species had `found === 0` before increment:

1. Count `t` = number of keys in `store.creatures` with `found > 0` **after** increment.
2. Add **`2 ** t`** tickets to `store.conservatory.tickets`.

Examples after each first-of-species capture (assuming no prior species):

| Capture order (species) | `t` after | Tickets granted |
| ----------------------- | --------- | --------------- |
| 1st species ever        | 1         | 2               |
| 2nd unique species      | 2         | 4               |
| 3rd                     | 3         | 8               |
| 4th                     | 4         | 16              |
| 5th                     | 5         | 32              |

Repeat captures of the same species do not grant tickets.
Corraller researched sets `session.conservatoryAttention` on first find.
Toast uses `firstPickupToastKey` or default `entities|firstPickup`.

Legacy saves migrate plural keys (`lumlings` → `lumling`, `shinelets` → `shinelet`).
Very old saves may seed initial tickets from `creatures.resinWeaver.available`.

## Creature roster (vanilla)

Five capturable **`typeId`** strings register in the extract.
Display names in UI/i18n may differ.

| sortOrder | `typeId`       | UI name (i18n) | Notes                          |
| --------- | -------------- | -------------- | ------------------------------ |
| 1         | `shinelet`     | Shinelet       | Fog spawner; flying light-bug  |
| 2         | `lumling`      | Lumling        | FogWater spawner               |
| 3         | `resinWeaver`  | Redweaver      | Ground weaver                  |
| 4         | `eyes`         | Voltblub       | Grounded electric critter      |
| 5         | `voidgrazer`   | Voidgrazer     | Large flying void critter      |

There are **no** separate `redweaver` or `voltblub` type ids.
Pet tuning namespaces `shinelet` and `voltblub` in options are unrelated ids.

Corraller short-description keys use the **`typeId`** strings above.

Detail fields: [Creature instance fields](/okf/entities/creature-fields.md).

## Reward tech ids

Conservatory rewards are rows in engine `CONSERVATORY_REWARDS` (not on the main Research grid).
Purchased state is still `store.player.tech[id]`.

| Id (enum)          | Tickets | Requires        | Unlocks (summary)                                      |
| ------------------ | ------- | --------------- | ------------------------------------------------------ |
| `ColoringTool` (92) | 1       | —               | item `coloringTool`                                    |
| `GlassFoundation` (95) | 1    | —               | structure `glassFoundation`                            |
| `CritterFence` (110) | 1      | —               | structure `critterFence`                               |
| `SignalGate` (93)  | 1       | —               | structure `signalGate` (UI label "Door")               |
| `GrapplingHook` (94) | 5     | —               | item `GrapplingHook`                                   |
| `PrecisionTools` (96) | 5    | —               | items caulk blaster, precision laser, prefabulator     |
| `SignalDevices` (97) | 5     | —               | signal structures + item `signalLinker`                |
| `SignalControls` (98) | 5   | `SignalDevices` | toggles, buttons, pulse/presence sensors               |
| `LogicGates` (99)  | 5       | `SignalControls` | AND/OR/NOT/NAND/NOR/XOR/XNOR/repeater structures    |
| `WallTool` (101)   | 10      | —               | item `wallTool`                                        |
| `RetroConsole` (100) | 20    | —               | structure `retroConsole`, item `retroConsoleController` |

`Corraller` tech (102) unlocks the conservatory tab when researched.

## Session flags

- `session.windows.conservatory.open`
- `session.conservatoryAttention`, `session.conservatoryNewCreature` (first capture UX)
- `store.hints.conservatoryIntroSeen`

Reward purchase is a tech unlock (not a separate store bag).

## Related concepts

- [Tech tree structure](/okf/progression/tech-tree.md) — `CONSERVATORY_REWARDS` source array
- [Tech](/okf/progression/tech.md) — `appendUnlock` and researched state
- [Enums](/okf/progression/enums.md) — `Tech` reward node ids
- [Store cluster](/okf/progression/store.md) — `conservatory` and `creatures` bags
