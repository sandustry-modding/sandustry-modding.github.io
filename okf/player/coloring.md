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

## `store.mods` color bags (live 0.5.6)

Persistent mod storage (via `sandkit.engine` storage helpers), not on the coloring **item**:

| `store.mods` key | Live shape (idle save) |
| --- | --- |
| `foundationColorPicker` | `{ hasLastBatch, lastColor }` — `lastColor` null until used |
| `lightColorPicker` | `{}` — active RGBA read through `lightColorPicker.getColor(state)` |

The coloring **tool** is a hotbar item (`coloringTool` sprite).
Paint state is session/engine API only.

## `floodFillColor` (extract)

Signature: `floodFillColor(state, structure, color, matchColorMode?)`.

| Behavior | Detail |
| --- | --- |
| Connectivity | 4-neighbor BFS on structures sharing the same `type`, stepping by `snapGridCellSize` |
| `matchColorMode` true | Only fills neighbors whose existing `color` matches the seed (including both unset) |
| `color` | Pass `null` / picker `NO_COLOR` to clear |
| Return | Count of cells recolored |

Limits are structural (same type, optional color match), not a fixed cell cap in extract.

## Probe snippet (read-only)

```js
() => {
  const s = globalThis.__debug?.state ?? window.sandkit?.state;
  const eng = window.sandkit?.engine?.api;
  if (!eng || !s) return { error: "need sandkit.engine.api or mod entry scope" };
  return {
    paintBucket: eng.coloringTool.isPaintBucketMode(s),
    matchColor: eng.coloringTool.isMatchColorMode(s),
    palette: eng.colorPicker.getActivePalette(),
    foundation: eng.foundationColorPicker.getColor(s),
    light: eng.lightColorPicker.getColor(s),
    modBags: {
      foundation: s.store?.mods?.foundationColorPicker,
      light: s.store?.mods?.lightColorPicker,
    },
  };
};
```

On Steam CDP `:9222`, `sandkit.engine.api` is often unreachable.
Use extract signatures above; mod bags are readable from `__debug.state.store.mods`.

## Related concepts

- [Gaps](/okf/player/gaps.md)
- [Probe](/okf/player/probe.md)
- [Engine and workers](/okf/internals/engine-and-workers.md)
