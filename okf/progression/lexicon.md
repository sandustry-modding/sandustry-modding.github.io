---
type: Reference
title: Lexicon
description: session.lexicon encyclopedia entries, compile timing, and relation to the discovery log for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - lexicon
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: progression-guide
    resource: /guides/progression.md
---

# Lexicon

In-game encyclopedia (elements, terrains, tech, items, upgrades, mods).
No public `sandkit.api.lexicon`.
Read `session.lexicon`.

## Session

```ts
session.lexicon: {
  compiled: boolean,
  entries: LexiconEntry[],
  entriesById: { [id: string]: LexiconEntry }
}
session.windows.lexicon: { open: boolean }
```

`LexiconEntry` shape (live):

- `kind`: `"element"` | `"terrain"` | `"tech"` | `"items"` | `"upgrades"` | `"projectiles"` | `"misc"` | ...
- `id`: string key (e.g. `"1"`, `"fluxEmanator"`, `"grabber:scanner"`)
- `name`, `description`: resolved display strings
- `source`: `"core"` | `"mod"`
- `details`: raw backing object

## Compile timing

`compiled` is `false` until the lexicon builder runs (first open or lazy init).
On loaded end-game saves it may already be **`compiled: true`** with a full `entries[]` before you open the window (live probe: thousands of entries, elements/tech/items/upgrades).

Before first compile: `compiled: false`, `entries.length: 0`.

## Relation to discoveries

- `store.discoveries` lists numeric type ids the player has seen.
- Lexicon entries add names, descriptions, and cross-links for UI search.

Discovery popups (`session.ui.discoveryPopups`) are separate short toasts on first sight.

Open via management UI or hotkey.
Window state: `session.windows.lexicon`.

## Related concepts

- [Discoveries](/okf/progression/discoveries.md) — numeric type id lists
- [Store cluster](/okf/progression/store.md) — `session.lexicon` and window flags
- [HUD and overlays](/okf/ui/hud-and-overlays.md) — management UI screens
