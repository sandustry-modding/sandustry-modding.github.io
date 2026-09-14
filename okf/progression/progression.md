---
type: Reference
title: Progression flags
description: sandkit.api.progression.complete domains, store.progression shape, and relation to other progression bags.
tags:
  - sandustry
  - okf
  - progression
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: progression-guide
    resource: /guides/progression.md
  - id: types-package
    resource: node_modules/@sandustry-modding/types/src/sandkit/api/progression.d.ts
---

# Progression

Public API: `sandkit.api.progression`.
Official signatures: [sandkit.html](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/progression.d.ts`.

## API (0.5.5)

```ts
progression.complete(
  request:
    | { domain: "tutorial"; grantNormalUnlocks?: boolean }
    | { domain: "objective"; id: string }
): boolean
```

Marks a tutorial or objective step complete.
Returns `true` on success.
**Write** - do not call during read-only probes.

Example: `progression.complete({ domain: "objective", id: "all" })`.

## Store

```ts
store.progression: {
  upgradesUnlocked: boolean,
  dungeons: { [dungeonId: number]: { done: boolean } }
}
```

- `upgradesUnlocked`: gates the Upgrades management tab.
- `dungeons`: keyed by enum value.
  New save: `{ 1: { done: false } }` (`Boss1` = 1).

Setting `upgradesUnlocked` or dungeon `done` is done by game systems (boss win, debug cheats).
No public getter besides reading `store`.

## Relation to other bags

| Bag                 | Role                          |
| ------------------- | ----------------------------- |
| `store.player.tech` | Tech tree purchases           |
| `store.upgrades`    | Tool and drone upgrade levels |
| `store.objectives`  | Optional HUD objective cards  |
| `store.tutorial`    | Guided early-game steps       |
| `store.viability`   | Factory tier bar              |

Objective `id` values beyond documented examples are not listed in public types.
Confirm in extracted `sandustry/` or live logs before calling.

## Related concepts

- [Upgrades](/okf/progression/upgrades.md) — `upgradesUnlocked` gate
- [Tutorial](/okf/progression/tutorial.md) — `progression.complete({ domain: "tutorial" })`
- [Objectives](/okf/progression/objectives.md) — objective id caveats
- [Store cluster](/okf/progression/store.md) — full progression key list
