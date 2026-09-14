---
type: Reference
title: Player enums
description: Live sandkit.enums values for BuildMode, ActionType, ActionState, ItemType, ItemId, AbilityType, and KeyBinding.
tags:
  - sandustry
  - okf
  - player
  - enums
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: types
    resource: https://sandustry-modding.github.io/SandustryTypes/#/
---

# Player enums

Live on `sandkit.enums.*`.
Generated docs: [SandustryTypes](https://sandustry-modding.github.io/SandustryTypes/#/).

## `BuildMode`

| Member      | Value |
| ----------- | ----- |
| Linear      | 1     |
| Rectangular | 2     |

## `ActionType`

| Member   | Value |
| -------- | ----- |
| Weapon   | 1     |
| Building | 2     |
| Tool     | 3     |
| Mod      | 4     |

## `ActionState`

| Member | Value |
| ------ | ----- |
| Start  | 1     |
| Active | 2     |
| End    | 3     |

## `ItemType`

| Member     | Value |
| ---------- | ----- |
| Weapon     | 1     |
| Tool       | 2     |
| Consumable | 3     |
| Mod        | 4     |

## `ItemId` (vanilla tools and weapons)

| Member         | Value |
| -------------- | ----- |
| Shovel         | 1     |
| Grabber        | 2     |
| Demolisher     | 3     |
| GrapplingHook  | 4     |
| Vacuum         | 5     |
| Gun            | 6     |
| Copier         | 7     |
| RocketLauncher | 8     |
| Digger         | 9     |
| Shotgun        | 10    |
| Teleporter     | 11    |
| Flamethrower   | 12    |
| PipeRemover    | 13    |
| Hauler         | 14    |
| Cryoblaster    | 15    |
| MegaShotgun    | 16    |

Hotbar structure slots use **string** ids (e.g. `"conveyor"`) with `type: 4` (`Mod`), not `ItemId`.

## `AbilityType`

| Member | Value |
| ------ | ----- |
| Dig    | 1     |
| Shoot  | 2     |
| Spray  | 3     |
| Laser  | 4     |

## `KeyBinding`

String ids for `sandkit.api.input.getBoundKeys`.
Members include: `OpenBuildMenu`, `OpenInventory`, `OpenTechTree`, `OpenUpgrades`, `GrapplingHook`, `Escape`, `Pause`, `Left`, `Right`, `Boost`, `Descend`, `Hover`, `SprintBoost`, `Marquee`, `Demolish`, `BuildMode`, `ReverseBuildDirection`, `OverrideReplaceStructures`, `Ruler`, `Copy`, `Paste`, `Flip`, `Delete`, `QuickSave`, `QuickLoad`, `ToggleGameHud`, `PauseCamera`.

Live key map: [Input](/okf/player/input.md).

## Related concepts

- [Player state and API](/okf/player/player.md)
- [Items and hotbar](/okf/player/items.md)
- [Action](/okf/player/action.md)
- [Building mode](/okf/player/building.md)
