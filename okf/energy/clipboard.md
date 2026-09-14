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

## Related

- [Engine signals runtime](/okf/energy/engine-signals.md) — session `links` map layout.
- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — structure origin cells and placement.
