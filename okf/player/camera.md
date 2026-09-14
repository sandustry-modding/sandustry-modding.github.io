---
type: Reference
title: Camera
description: session.camera fields, sandkit.api.camera methods, and related session zoom and focus flags for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - player
  - camera
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

# Camera

## `session.camera`

| Field    | Role                          |
| -------- | ----------------------------- |
| `x`, `y` | Camera center in world pixels |

Related session fields (read-only probes):

| Field                     | Live sample                     |
| ------------------------- | ------------------------------- |
| `zoomLevel`               | `1`                             |
| `overrideCamera`          | `false` — scripted focus active |
| `lerpCamera`              | `false`                         |
| `movementSpeedMultiplier` | `1` — pan speed when focused    |

## `sandkit.api.camera`

| Method                          | Arity | Notes                                    |
| ------------------------------- | ----- | ---------------------------------------- |
| `snapToPlayer()`                | 0     | **mutate**                               |
| `setFocusAtWorld(x, y)`         | 2     | **mutate** — move focus, returns applied |
| `releaseFocus({ durationMs? })` | 1     | **mutate** — return to player            |

## Engine twin

`engine.api.camera`: `snapToPlayer(state)`, `setFocusAtWorld(state, x, y)`, `releaseFocusToPlayer(state)`.

## Do not use in probes

`__debug.moveCamera` mutates view.
It needs explicit user ask — see [Engine and workers](/okf/internals/engine-and-workers.md).

## Related concepts

- [Session state](/okf/player/state.md)
- [Probe](/okf/player/probe.md)
