---
type: Reference
title: Tutorial
description: store.tutorial step machine, TutorialStep enum values, and engine tutorialBuild helpers for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - tutorial
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: progression-guide
    resource: /guides/progression.md
  - id: types-package
    resource: node_modules/@sandustry-modding/types/src/sandkit/engine/api/tutorialBuild.d.ts
---

# Tutorial

Early guided steps.
No public `sandkit.api.tutorial`.
Read `store.tutorial`.

## Store

```ts
store.tutorial: {
  active: boolean,
  currentStep: number,              // TutorialStep enum
  transitioningToNextStep: boolean | number,  // false or meta.time stamp
  data: object,                     // step payload from step factory
  pendingCompletion?: number        // optional, cleared after advance
}
```

New save: `active: true`, `currentStep: 1` (`Move`), `data` populated.

Completed tutorial: `active: false`, `currentStep` may remain at last value, `data: {}`.

## TutorialStep enum (numeric)

| Value | Name                     |
| ----- | ------------------------ |
| 1     | Move                     |
| 2     | Dig                      |
| 3     | Hotbar                   |
| 4     | PickUpSand               |
| 5     | WetSand                  |
| 6     | RefineWetSand            |
| 7     | SellGold                 |
| 8     | OpenTechTree             |
| 9     | UnlockRefining           |
| 10    | OpenBuildMenu            |
| 11    | BuildShaker              |
| 12    | RefineGoldWithShaker     |
| 13    | UnlockLogistics          |
| 14    | BuildConveyorAndLauncher |
| 15    | MoveFoundationBox        |
| 16    | RemoveFoundationBox      |
| 17    | ConfirmFinished          |
| 18    | TutorialEnd              |

## Engine build helpers

`sandkit.engine.api.tutorialBuild` exposes target cells and placement rules for constrained steps.
State-first internal API.
Types: `@sandustry-modding/types` `src/sandkit/engine/api/tutorialBuild.d.ts`.

## Tech gate during tutorial

Shaker may be researched during tutorial.
Conveyors allowed when `currentStep >= UnlockLogistics` (13).
Other tech may be blocked by UI and `isTechAllowedDuringTutorial`.

## Related concepts

- [Tech](/okf/progression/tech.md) — tutorial tech purchase gates
- [Progression flags](/okf/progression/progression.md) — `progression.complete({ domain: "tutorial" })`
- [Engine and workers](/okf/internals/engine-and-workers.md) — internal `engine.api` namespaces
