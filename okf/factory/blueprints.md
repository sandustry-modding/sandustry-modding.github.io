---
type: Reference
title: Blueprints
description: Public structure blueprint serialize and localize helpers for copy and paste layouts.
tags:
  - sandustry
  - okf
  - factory
  - blueprints
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: vanilla-055-probe
    resource: sandustry 0.5.5 live session
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
---

# Blueprints (structures)

Public structure blueprint helpers for copy/paste and localization.
Official HTML: `api.blueprints`.

## `sandkit.api.blueprints` (public, 0.5.5)

| Method                            | Role                                              |
| --------------------------------- | ------------------------------------------------- |
| `serializeStructures(structures)` | Structure array -> portable blueprint payload     |
| `localizeStructures(structures)`  | Blueprint payload -> localized display structures |

Both are read-only on existing `store.structures` entries.
Do not use them to place or remove structures.

## Live shape (probe)

Input: two `store.structures` items.
`serializeStructures` returns an array, each item has keys `type`, `x`, `y` (and more when present on source).

`localizeStructures(serialized)` returns an array with the same top-level keys on the first item.

Internal twin: `engine.api.blueprints` — prefer public `api.blueprints` for mods.

## Related

- Player clipboard / coloring: [Player: inventory and items](/okf/player/inventory-and-items.md).
- Structure instance fields: [Structures](/okf/factory/structures.md).
