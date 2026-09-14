---
type: Reference
title: Coloring
description: Engine-only coloringTool, colorPicker, foundationColorPicker, and lightColorPicker namespaces for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - coloring
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

# Coloring

Engine-only namespaces on `sandkit.engine.api`.
There is no public `sandkit.api` twin.

## `coloringTool`

| Method                                   | Role                                    |
| ---------------------------------------- | --------------------------------------- |
| `getColor(state)`                        | Structure color hex (default `#ff0000`) |
| `setColor(state, hex)`                   | **mutate**                              |
| `isPaintBucketMode(state)`               | Paint bucket on                         |
| `togglePaintBucketMode(state)`           | **mutate** — binding often **B**        |
| `isMatchColorMode(state)`                | Match-color mode                        |
| `toggleMatchColorMode(state)`            | **mutate**                              |
| `colorStructure(structure, cell, color)` | **mutate**                              |
| `floodFillColor(state, cell, color, …)`  | **mutate**                              |
| `isColorableStructure(structure)`        | Type can be painted                     |

## `colorPicker`

| Symbol / method                                              | Role                      |
| ------------------------------------------------------------ | ------------------------- |
| `NO_COLOR`                                                   | `null`                    |
| `RANDOM_COLOR`                                               | `"random"`                |
| `CYCLE_COLOR`                                                | `"cycle"`                 |
| `PREDEFINED_COLORS`                                          | 16 hex swatches           |
| `getActivePalette()`                                         | Open palette id or `null` |
| `setActivePalette(id)`                                       | **mutate**                |
| `togglePalette(state, id, slot?)`                            | **mutate**                |
| `closePalette(state, slot?)`                                 | **mutate**                |
| `hexToRgba` / `rgbaToHex`                                    | Color conversion          |
| `getRandomColor` / `getCycleColor`                           | Pick swatch               |
| `renderColorButton` / `renderPalette` / `renderColorSection` | UI helpers                |

## `foundationColorPicker`

| Method            | Role                                     |
| ----------------- | ---------------------------------------- |
| `getColor(state)` | Foundation tint (live default `#555555`) |

## `lightColorPicker`

| Method            | Role                                                         |
| ----------------- | ------------------------------------------------------------ |
| `getColor(state)` | Wall light RGBA array, random and cycle modes use picker helpers |

## Probe snippet (read-only)

```js
() => {
  const s = window.sandkit.state;
  const eng = window.sandkit.engine.api;
  return {
    paintBucket: eng.coloringTool.isPaintBucketMode(s),
    matchColor: eng.coloringTool.isMatchColorMode(s),
    palette: eng.colorPicker.getActivePalette(),
    foundation: eng.foundationColorPicker.getColor(s),
    light: eng.lightColorPicker.getColor(s),
  };
};
```

## Related concepts

- [Gaps](/okf/player/gaps.md)
- [Probe](/okf/player/probe.md)
- [Engine and workers](/okf/internals/engine-and-workers.md)
