---
type: Reference
title: Session state
description: Player-related session, store, and shared keys on sandkit.state for Early Access 0.5.5 probes.
tags:
  - sandustry
  - okf
  - player
  - state
  - session
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

# Session state

Subset of `sandkit.state.session` used for player, tools, and building probes.
Full bag list: [Engine and workers](/okf/internals/engine-and-workers.md).

## Player-related `session` keys

| Key                                      | Role                                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `camera`                                 | View center — [Camera](/okf/player/camera.md)                                      |
| `input`                                  | Keys and mouse — [Input](/okf/player/input.md)                                       |
| `building`                               | Placement drag — [Building mode](/okf/player/building.md)                            |
| `construction`                           | Marquee, demolish, and ruler flags                                                   |
| `action`                                 | Active use state — [Action](/okf/player/action.md)                                   |
| `actionLocked`                           | Blocks new actions                                                                   |
| `cheat.bypassCosts`                      | Free placement                                                                       |
| `movementSpeedMultiplier`                | Session movement scale                                                               |
| `overrideCamera`, `lerpCamera`           | Scripted camera                                                                      |
| `zoomLevel`                              | Zoom factor                                                                          |
| `reconMode`                              | Recon drone active (`false` when idle)                                               |
| `sprintBoost`                            | `{ meter: 0-1, recharging: boolean }` — live idle: `{ meter: 1, recharging: false }` |
| `windows.building`, `windows.blueprints` | Management overlays open                                                             |

## `store` (player branch)

| Key      | Role                                                          |
| -------- | ------------------------------------------------------------- |
| `player` | Full player snapshot — [Player state and API](/okf/player/player.md) |

## `shared` (read-only hints)

| Key           | Role                       |
| ------------- | -------------------------- |
| `playerPos`   | Worker-synced position     |
| `actionState` | Cross-thread action mirror |
| `mouse`       | Shared mouse snapshot      |

Do not dump large `store.world` or `shared.sim` buffers in probes.

## Related concepts

- [Probe](/okf/player/probe.md)
- [Engine and workers](/okf/internals/engine-and-workers.md)
