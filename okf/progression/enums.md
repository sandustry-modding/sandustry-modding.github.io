---
type: Reference
title: Enums
description: sandkit.enums.Tech, TechStatus, and related progression enum ids from the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - progression
  - enums
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: types-package
    resource: node_modules/@sandustry-modding/types/src/sandkit/enums/index.d.ts
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
---

# Enums

Live on `sandkit.enums`.
Types: `@sandustry-modding/types` `src/sandkit/enums/index.d.ts`.
Reference: [SandustryTypes](https://sandustry-modding.github.io/SandustryTypes/#/).

## TechStatus

Visibility and research state for **UI** (not the same as `player.tech`).

| Value | Name       | Meaning                        |
| ----- | ---------- | ------------------------------ |
| 0     | Available  | May be purchased now           |
| 1     | Visible    | Shown but requirements not met |
| 2     | Researched | Already bought                 |
| 3     | Unknown    | Enum reserved; vanilla UI unused |
| 4     | Hidden     | Enum reserved; vanilla UI unused |

Vanilla assigns only **Available**, **Visible**, and **Researched** via engine `parseTechTree`.
Full derivation rules: [TechStatus](/okf/progression/tech-status.md).

## Tech

Mixed numeric and string node ids.
Numeric core examples:

`Shaker=1`, `Conveyors=2`, `Flamethrower=5`, `Gun=6`, `Hover=108`, `SprintBoost=109`, `Heatmap=105`, `Corraller=102`.

String examples: `FluxEmanator="fluxEmanator"`, plus mod string ids (`aurixiteCrystallizer`, `swarmConsole`, `voidOrb`, ...).

Use `String(Tech.Conveyors)` (`"2"`) or a registered string id (`"fluxEmanator"`).
Enum **key names** (`"Conveyors"`, `"Shaker"`) return **`null`** from `getDefinitionById`.
Lowercase slugs (`"conveyor"`) also return null.

Live `sandkit.enums.Tech` has **221** keys on 0.5.5 (numeric core + string mod ids).
Types package core enum is in `node_modules/@sandustry-modding/types/src/sandkit/enums/index.d.ts` lines 289-401 (~110 built-in entries).

## Related enums

- `ElementType`, `CellType`: discovery and lexicon element ids.
- `ItemId`, `StructureType`: unlock targets on tech definitions.
- `DungeonId` / `Boss1`: `store.progression.dungeons` keys.

## Related concepts

- [TechStatus](/okf/progression/tech-status.md) — runtime status derivation
- [Tech tree structure](/okf/progression/tech-tree.md) — grid branches and colors
- [Tech](/okf/progression/tech.md) — `getDefinitionById` id format rules
- [Discoveries](/okf/progression/discoveries.md) — `ElementType` discovery ids
- [Progression flags](/okf/progression/progression.md) — `DungeonId` keys
