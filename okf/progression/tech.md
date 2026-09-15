---
type: Reference
title: Tech
description: sandkit.api.tech methods, researched state, locks, definitions, and tutorial gates for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - tech
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
    resource: node_modules/@sandustry-modding/types/src/sandkit/api/tech.d.ts
---

# Tech

Public API: `sandkit.api.tech`.
Official signatures: [sandkit.html](https://sandustry.com/sandkit.html).
Types: `@sandustry-modding/types` `src/sandkit/api/tech.d.ts`.
Research screen layout: [HUD and overlays](/okf/ui/hud-and-overlays.md).

## API (live 0.5.5)

| Method                                                       | Role                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getDefinitionById(techId)`                                  | Return definition. Live lookups that work: numeric strings (`"1"`, `"2"`), `Tech.Conveyors` (number **2**), and registered string ids (`"fluxEmanator"`). Enum **names** (`"Conveyors"`) and lowercase slugs (`"conveyor"`, `"hover"`) return **`null`**. |
| `isResearchedById(techId)`                                   | `true` when the node is in `store.player.tech`. Prefer over reading the map directly.                                                                                                                                                                     |
| `isLockedById(techId)`                                       | `true` when locked. Id may be `string` or `number` (`sandkit.enums.Tech`).                                                                                                                                                                                |
| `setLockedById(techId, locked)`                              | Write lock flag into `store.lockedTechs`.                                                                                                                                                                                                                 |
| `registerDefinition`, `updateDefinition`, `registerNode`     | Mod registration. `addDefinition` is a **deprecated alias** of `registerDefinition`.                                                                                                                                                                      |
| `conservatory.appendUnlock(techId, { structures?, items? })` | Append structure or item unlocks to a conservatory reward tech. See [Conservatory](/okf/progression/conservatory.md).                                                                                                                                                                    |

Engine twin (state first): `sandkit.engine.api.tech` with `getDefinition`, `isLocked`, `setLocked`, `registerNode`, etc.
Prefer public API in mods.

## Researched state

`store.player.tech` is a map of **researched** nodes.
Values are **booleans** (`true` = purchased).
Live this save: **67** keys (`"1"`, `"2"`, ...).
No `{ x, y }` grid positions on the live object.

- Keys are **mixed**: numeric enum values as strings (`"1"`, `"22"`) and string ids (`"fluxEmanator"`, `"swarmConsole"`).
- This is not `TechStatus`.
  UI derives Available / Visible / Researched from definitions, parents, and `lockedTechs`.

## Locks

`store.lockedTechs` overrides definition `locked` when the key exists.

- Value `true`: locked (cannot buy).
- Value `false`: explicitly unlocked (cheat/debug paths).
- Missing key: fall back to static definition `locked`.

Live end-game save (2025-08): **70** keys - **2** with value `true` (locked), **68** with `false` (explicit unlock).
Missing key falls back to definition `locked`.

## Definitions

`getDefinitionById` returns fields such as:

- `nameKey`, `descriptionKey`, `descriptionParams`
- `cost`, `branch`, `currencyType` (`gold`, `ticket`, `auralite`, ...)
- `requires` (parent tech id or array)
- `unlocks.structures`, `unlocks.items`, `unlocks.map`
- `isElectricity`, `electricityNodeStyle`, `isAlien`, `threshold`, `radiusUnlockPx`

Full enum list: [Enums](/okf/progression/enums.md).
Grid layout and branch colors: [Tech tree structure](/okf/progression/tech-tree.md).
Runtime UI status (not on public API): [TechStatus](/okf/progression/tech-status.md).

## Tutorial gate

During tutorial, only some tech may be bought.
Engine checks `isTechAllowedDuringTutorial` (Shaker always; Conveyors after step `UnlockLogistics`).

## Related concepts

- [Conservatory](/okf/progression/conservatory.md) — ticket rewards and `appendUnlock`
- [Tutorial](/okf/progression/tutorial.md) — step gates for tech purchases
- [Tech tree structure](/okf/progression/tech-tree.md) — grid, connections, branches
- [TechStatus](/okf/progression/tech-status.md) — Research UI status derivation
- [Enums](/okf/progression/enums.md) — `Tech` and `TechStatus` values
- [Store cluster](/okf/progression/store.md) — `player.tech` and `lockedTechs`
