---
type: Reference
title: Objectives
description: HUD objective cards, store.objectives, completion rules, and story progression engine API from the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - progression
  - objectives
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
  - id: progression-guide
    resource: /guides/progression.md
---

# Objectives

Optional HUD story cards (**Objectives** in top right).
No public `sandkit.api` namespace for secondary cards.
Primary **story** objectives use `store.mods.storyProgression` plus `sandkit.engine.api.progression`.

## Store

```ts
store.objectives: {
  active: Array<{
    id: string,
    completed: boolean,
    completedAt?: number   // ms timestamp when done
  }>
}

store.mods.storyProgression: {
  currentStep: string | null,
  completedSteps: string[],
  objectivePositions?: Record<string, { x, y }>,
  waypoints?: unknown[]
}
```

## Public completion API

`sandkit.api.progression.complete({ domain, id? })`:

| Call                                      | Behavior                                      |
| ----------------------------------------- | --------------------------------------------- |
| `{ domain: "objective", id: "<cardId>" }` | Force-complete one registered secondary card |
| `{ domain: "objective", id: "all" }`      | Complete every active incomplete card          |
| `{ domain: "tutorial", ... }`             | Skip tutorial (separate flow)                |

Only ids in the built-in registry (`qs` in extract) succeed for single-id calls.

## Engine API (story line)

`sandkit.engine.api.progression`:

| Method                           | Role                                                                         |
| -------------------------------- | ---------------------------------------------------------------------------- |
| `getSteps(state)`                | All story step defs (`objective.type`: `factoryLevel`, `waypoint`, `custom`) |
| `getCurrentStep(state)`          | Active step or null                                                          |
| `isStepCompleted(state, stepId)` | Step in `completedSteps`                                                     |
| `complete(state, stepId)`        | Finish step when checks pass (returns `false` if blocked)                    |
| `triggerCurrentWaypoint(state)`  | Advance waypoint step                                                        |

Factory-tier HUD labels (**Reach Factory Tier {level}**) come from story steps with `objective.type === "factoryLevel"`.

## Secondary card registry (extract)

Built-in defs live in extract module `92659` (`qs` export).
Each entry has `titleKey`, `descriptionKey`, optional `check(state)`, optional `nextObjectives`, optional `getDescription`.

### Initial active set

New-game init (`lF`) seeds **four** cards:

1. `research_hover`
2. `build_conveyor_under_water`
3. `find_fluxite`
4. `upgrade_grabber`

Mid-game saves may drop completed starters (for example `research_hover` after Hover is researched).
End-game probes often keep incomplete side branches only.

### Chain graph

```
research_hover → research_flamethrower → burn_residue
                                      → melt_ice
                                      → vaporize_water
                                      → let_it_rain
                                      → research_kinetic_press
find_fluxite → upgrade_grabber → find_artifact
```

Completing a card pushes any `nextObjectives` not already in `active`.
Researching **Hover** tech also calls `addObjective("hover")` from the tech unlock path.

### Auto-check cards

| Id                       | `check(state)` rule                                              |
| ------------------------ | ---------------------------------------------------------------- |
| `research_hover`         | `player.tech[Hover] === true`                                    |
| `research_flamethrower`  | `player.tech[Flamethrower] === true`                             |
| `research_kinetic_press` | `player.tech[KineticPress] === true`                             |
| `find_fluxite`           | `resources.fluxite > 0`                                          |
| `upgrade_grabber`        | any `store.upgrades.grabber[*].availableLevel > 0`               |
| `find_artifact`          | `resources.artifacts.found >= 1`                                 |

`checkObjectives` (`bS`) runs these checks after tech unlock and on other engine hooks.
There is no fixed global tick interval in extract; polling is event-driven.

### Event-driven cards

| Id                 | Completion trigger (main thread)                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------ |
| `build_conveyor_under_water` | `building:placed` — conveyor-like structure (`ConveyorLeft/Right`, mk2, burner belt, or type string containing `"conveyor"`) on a **Water** element tile |
| `burn_residue`     | Flamethrower fire ignites **Residue** → **Flame** (first time per session flag)                  |
| `melt_ice`         | **Ice** terrain destroyed by flamethrower spread (main) or worker posts `ForceCompleteObjective` |
| `vaporize_water`   | Fire ignites **Water** or **FreezingIce** element → **Steam** (main-thread flag)                 |
| `let_it_rain`      | Worker cloud `element:duration` intercept — first cloud expiry posts `ForceCompleteObjective`    |
| `hover`            | Added when Hover tech unlocks; manual / keybind card (`getDescription` injects bind label)       |

Worker → main IPC: message id **ForceCompleteObjective** (`ManagerMessageType` 45) calls the same `completeObjective` helper as main-thread `EM(state, id)`.

### UI auto-remove

Completed cards carry `completedAt`.
The Objectives React panel schedules removal after **5000 ms** (`Ku` constant in extract).
That is cosmetic; completion state persists until removed from `active`.

Game boot registers the `building:placed` listener via init hook `n4(state)`.

## Story vs secondary

Primary story ("Investigate Anomaly", **SIGNAL DETECTED**) is driven by `store.mods.storyProgression`, not `store.objectives.active`.
Both can show on the HUD at once.

## Related concepts

- [Progression flags](/okf/progression/progression.md) — `progression.complete({ domain: "objective" })`
- [Viability](/okf/progression/viability.md) — factory-tier story steps
- [Tech](/okf/progression/tech.md) — research unlocks that feed auto-check objectives
- [HUD and overlays](/okf/ui/hud-and-overlays.md) — Objectives panel layout
