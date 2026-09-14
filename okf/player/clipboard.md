---
type: Reference
title: Clipboard
description: sandkit.engine.api.clipboard blueprint copy and paste buffer for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - clipboard
  - blueprints
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

# Clipboard

Blueprint copy and paste buffer on `sandkit.engine.api.clipboard`.
Binds to `KeyBinding.Copy` / `Paste` (live: `Control+KeyC` / `Control+KeyV`).

## Methods

| Method                    | Arity | Notes                                                            |
| ------------------------- | ----- | ---------------------------------------------------------------- |
| `get()`                   | 0     | Current clipboard structure data or `null`                       |
| `getSignalLinks()`        | 0     | Signal link sidecar or `null`                                    |
| `getHistory()`            | 0     | Array of past copies `{ id, timestamp, data, signalLinks? }`     |
| `set(data, signalLinks?)` | 2     | **mutate**                                                       |
| `clear()`                 | 0     | **mutate**                                                       |
| `selectFromHistory(id)`   | 1     | **mutate** — restore history entry                               |
| `activate()`              | 0     | **mutate** — paste preview, may close building or blueprint windows |

## Read-only probe

```js
() => {
  const c = window.sandkit.engine.api.clipboard;
  return {
    hasData: !!c.get(),
    historyLen: c.getHistory()?.length ?? 0,
    hasSignalLinks: !!c.getSignalLinks(),
  };
};
```

Clipboard history UI lives in [UI: HUD and overlays](/okf/ui/hud-and-overlays.md) under Building → Blueprints tab.

## Related concepts

- [Input](/okf/player/input.md)
- [Gaps](/okf/player/gaps.md)
- [Probe](/okf/player/probe.md)
