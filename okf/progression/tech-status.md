---
type: Reference
title: TechStatus
description: How the Research UI derives per-node TechStatus from definitions, neighbors, and store state in the 0.5.6 extract.
tags:
  - sandustry
  - okf
  - progression
  - tech
  - tech-status
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
  - id: types-package
    resource: node_modules/@sandustry-modding/types/src/sandkit/enums/index.d.ts
---

# TechStatus

`sandkit.enums.TechStatus` is a UI visibility enum.
It is **not** stored on `store.player.tech`.
Researched nodes are booleans in that map only.

There is **no public** `sandkit.api.tech.getStatusById` (confirmed absent on CDP `:9222`, 0.5.6).
The Research screen derives status through engine `parseTechTree(state)`.
That function maps every grid node and attaches a `status` field.

## Enum values

| Value | Name       | Role in vanilla tree                         |
| ----- | ---------- | -------------------------------------------- |
| 0     | Available  | Node may be purchased now                    |
| 1     | Visible    | Shown; requirements or gates not met         |
| 2     | Researched | Already in `store.player.tech`               |
| 3     | Unknown    | Enum reserved; vanilla `parseTechTree` never assigns |
| 4     | Hidden     | Enum reserved; vanilla `parseTechTree` never assigns |

## Derivation order (extract)

For each node `e` and state `t`, vanilla sets `status` as follows.

1. **Researched** when `store.player.tech[e.id] === true`.
2. Else **Shaker** is always **Available** (starter node).
3. Else when `e.requires` is set:
   - **Available** when every required parent id is researched.
   - **Visible** otherwise.
4. Else when `e.id === "swarmConsole"`:
   - **Visible** until a grid neighbor is researched.
   - Then **Available** when `auralite.getProduced(state) >= threshold` (or cheat bypass).
   - Else **Visible**.
5. Else when `e.radiusUnlockPx` is set (alien radius nodes):
   - **Available** when crystal-mined distance from `swarmConsole` meets the px threshold (or cheat bypass).
   - Else **Visible**.
6. Else (normal neighbor reveal):
   - **Available** when at least one grid neighbor is researched.
   - **Visible** otherwise.
7. **Tutorial gate:** if tutorial is active and `isTechAllowedDuringTutorial` is false, downgrade **Available** → **Visible**.
8. **Lock gate:** if `isTechLocked` is true and not already researched, force **Visible**.

Helper `areTechRequirementsMet(state, def)` normalizes `requires` to an array and checks each parent in `player.tech`.

## What mods can read

| Source                         | Use                                              |
| ------------------------------ | ------------------------------------------------ |
| `sandkit.api.tech.isResearchedById` | Purchased state                             |
| `sandkit.api.tech.isLockedById`     | Lock override in `store.lockedTechs`        |
| `sandkit.api.tech.getDefinitionById` | Static def; no runtime status field        |
| `sandkit.engine.api.tech.parseTechTree` | Full node list with `status` (internal) |

Prefer public researched/locked queries in mods.
Mirror the rules above only when you must reproduce Research UI behavior offline.

## Unknown and Hidden (future use)

`Unknown` (3) and `Hidden` (4) exist on `sandkit.enums.TechStatus` in [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) and the 0.5.6 bundle enum block.
Vanilla `parseTechTree` (webpack module **77135**) only ever writes **0**, **1**, or **2**.

Live proof (CDP `:9222`, dev-tools autosave, all tech purchased):

- `parseTechTree(state)` → **56** nodes, every `status` is **2** (Researched).
- No node with `status` **3** or **4**.

Treat **3** / **4** as reserved for future UI or mod-facing status APIs.
Do not expect them from vanilla Research on 0.5.6.
If a future build assigns them, re-probe with `FH.tech.parseTechTree` or module **77135**.

## Related concepts

- [Tech](/okf/progression/tech.md) — public API and researched map
- [Enums](/okf/progression/enums.md) — `TechStatus` numeric ids
- [Tech tree structure](/okf/progression/tech-tree.md) — grid, neighbors, branches
- [Tutorial](/okf/progression/tutorial.md) — purchase gates during tutorial
