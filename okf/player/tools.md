---
type: Reference
title: Tools and grabber
description: sandkit.api.tools.grabber methods, engine twin, and related construction session flags for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - tools
  - grabber
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: player-guide
    resource: /guides/player.md
---

# Tools and grabber

Grabber is the main documented tool namespace.
Other tools (Shovel, Demolisher, Copier, ...) are hotbar `ItemId` entries with abilities — see [Enums](/okf/player/enums.md).

## `sandkit.api.tools.grabber`

| Method       | Arity | Notes                                     |
| ------------ | ----- | ----------------------------------------- |
| `getSize()`  | 0     | Radius in **cells** (live default **25**) |
| `setSize(n)` | 1     | **mutate**                                |
| `isActive()` | 0     | Grabber is the selected tool              |
| `isLoaded()` | 0     | Buffer holds elements                     |

Path: `sandkit.api.tools.grabber` (not top-level `api.grabber`).

Element opt-in: definition `isGrabbable` — see [Grid and elements](/okf/world/grid-and-elements.md).
Grab skips when `isGrabbable === false`.

## Engine twin

`sandkit.engine.api.tools`: `getGrabberSize(state)`, `setGrabberSize(state, n)`, `isGrabberActive(state)`, `isGrabberLoaded(state)`, `blockSwitchIfGrabberLoaded(state)`.

## Live probe snippet

```js
() => {
  const g = window.sandkit.api.tools.grabber;
  return { size: g.getSize(), active: g.isActive(), loaded: g.isLoaded() };
};
```

## Related session flags

- `session.construction.demolisherActive` — demolish mode (binding `KeyBinding.Demolish`).
- Grabber loaded state blocks some hotbar switches (`blockSwitchIfGrabberLoaded` on engine).

## Related concepts

- [Items and hotbar](/okf/player/items.md)
- [Building mode](/okf/player/building.md)
- [Input](/okf/player/input.md)
- [Probe](/okf/player/probe.md)
