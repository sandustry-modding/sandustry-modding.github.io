---
type: Reference
title: Clipboard signal links
description: Build clipboard and blueprint signal link array shapes versus runtime session link maps.
tags:
  - sandustry
  - okf
  - energy
  - signals
  - clipboard
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: engine-guide
    resource: /guides/engine.md
---

# Clipboard signal links

Engine: `sandkit.engine.api.clipboard.getSignalLinks()` (state-first).
Returns the link array on the build clipboard, or `null`.

Related: `get`, `set(structures, signalLinks?)`, `getHistory`, `selectFromHistory`, `activate`, `clear`.
Copy tool also stashes links in `session.action.customData.signalLinks`.

## Blueprint / saved link shape

Array of:

```ts
{ from: { x, y }, to: { x, y }, on: boolean }
```

`from` is sender structure origin cell.
`to` is receiver structure origin cell.
Coordinates are structure grid cells (same space as `structures.getAtCell`).

## Runtime link shape (in session.mods.signals.links)

Keyed by sender `"x,y"`.
Values are `{ x, y, on }[]` pointing at receiver cells.
No `from` field inside entries.

Undo and move capture uses `_originalSignalLinks` and `_removedSignalLinks` on structure events.
Blueprint save (`engine.api.blueprints.save`) copies `getSignalLinks()` into stored blueprint metadata.

Do not paste full link arrays into chat.
Report counts and one sample entry only.

## Live persisted sample (0.5.6)

`store.mods.signals.links` on a save with six sender buckets:

| Sender key | Receiver entries |
| --- | --- |
| `"712,2432"` | `[{ x: 720, y: 2432, on: false }]` |
| `"720,2432"` | `[{ x: 724, y: 2432, on: true }]` |
| `"724,2432"` | two receivers, both `on: true` |
| `"728,2428"` | `[{ x: 732, y: 2428, on: false }]` |
| `"732,2428"` | `[{ x: 720, y: 2432, on: false }]` |
| `"728,2416"` | `[]` (sender with no outgoing links) |

`hideWires` was `false`.
Session `mods.signals.links` shares the same object reference as the store copy.

## Related

- [Engine signals runtime](/okf/energy/engine-signals.md) — session `links` map layout.
- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — structure origin cells and placement.
