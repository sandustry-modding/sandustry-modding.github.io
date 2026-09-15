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

`sandkit.engine.api.tutorialBuild` (`FH.tutorialBuild` via webpack **46781**) exposes target cells and placement rules for constrained steps.
State-first internal API.
Types: `@sandustry-modding/types` `src/sandkit/engine/api/tutorialBuild.d.ts`.

Do not confuse with `store.mods.tutorialBuild`.
That bag holds **storage flags** under key `"tutorialBuild"` (`sellGoldAutoBuilt`, `foundationBoxAutoBuilt`).
It is empty on dev-tools saves and unrelated to the engine API object.

### Methods (live 0.5.6)

| Method | Role when `store.tutorial.active` |
| --- | --- |
| `isStepConstrained(stepKey)` | `true` when the step has prefab target cells in `MS[stepKey]`. |
| `getTargets(stepKey)` | `{ x, y, type }[]` snap-grid cells for `buildShaker`, `buildConveyorAndLauncher`, `moveFoundationBox`, or `removeFoundationBox`. |
| `areAllTargetsBuilt(stepKey)` | Every target cell has a matching built structure. |
| `areFamilyTargetsBuilt(stepKey, family)` | Subset check for family `shaker`, `conveyor`, or `launcher`. |
| `canPlaceAtActiveTarget(state, structureType, x, y)` | Returns `false` when placement would miss the active tutorial target. No-op when tutorial inactive. |
| `shouldProtectActiveTargetAt(x, y)` | Returns `true` when demolish/move should not remove a tutorial target cell. |
| `matchesFoundationMove({ moved })` | Validates copier move payload `{ from, to, type }[]` against `moveFoundationBox` targets. |
| `matchesFoundationRemove({ removed })` | Validates foundation removal against `removeFoundationBox` targets. |
| `getFoundationMoveSources()` / `getFoundationMoveDests()` | Source and destination cell lists for the foundation-box move step. |
| `hasDefinition()` | `true` after prefab `data.tutorialBuild.origin` resolves (tutorial factory anchor `kS`). |

`stepKey` values: `buildShaker`, `buildConveyorAndLauncher`, `moveFoundationBox`, `removeFoundationBox`.

### Placement and demolish hooks

- **Build placement** (`structures:place`): `canPlaceAtActiveTarget` rejects off-target placements during constrained steps (`currentStep >= BuildShaker`).
- **Demolish** (`structures:remove` on main thread): `shouldProtectActiveTargetAt` skips protected cells unless `byMove` is set.
- **Structure-built tutorial advance**: `isStepConstrained` gates which `StructureType` values count toward step completion (e.g. only shakers during `BuildShaker`).
- **Copier move** during `MoveFoundationBox`: `matchesFoundationMove` must pass or the move is denied.

When `store.tutorial.active` is **false** (live dev-tools / post-game saves): `hasDefinition` is `false`, `getTargets` returns `[]`, `canPlaceAtActiveTarget` always allows, and `shouldProtectActiveTargetAt` always returns `false`.

### Prefab source (`data.tutorialBuild`)

Loaded from prefab metadata on `prefabData:loaded`.
Shape (extract):

| Field | Role |
| --- | --- |
| `origin` | `{ x, y }` offset from prefab top-left; sets factory anchor `kS`. |
| `auto.buildings` | Auto-build queue after `SellGold` (collector cells only). |
| `foundationBox.buildings` | Foundation source cells (`BS`). |
| Per-step keys (`buildShaker`, …) | `{ buildings: [{ type, x?, y?, start?, end? }] }` expanded to `MS[stepKey]` target cells. |

## Tech gate during tutorial

Shaker may be researched during tutorial.
Conveyors allowed when `currentStep >= UnlockLogistics` (13).
Other tech may be blocked by UI and `isTechAllowedDuringTutorial`.

## Related concepts

- [Tech](/okf/progression/tech.md) — tutorial tech purchase gates
- [Progression flags](/okf/progression/progression.md) — `progression.complete({ domain: "tutorial" })`
- [Engine and workers](/okf/internals/engine-and-workers.md) — internal `engine.api` namespaces
