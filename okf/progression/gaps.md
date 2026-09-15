---
type: Reference
title: Gaps
description: Open questions and missing public APIs in the progression domain after the 0.5.6 source extract.
tags:
  - sandustry
  - okf
  - progression
  - gaps
status: draft
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: extract
    resource: sandustry/source/dist/js/bundle.js
---

# Gaps

Resolved in prior passes (see linked concepts):

- Per-tech `TechStatus` without the Research UI helper — [TechStatus](/okf/progression/tech-status.md).
- Full conservatory roster and ticket curve — [Conservatory](/okf/progression/conservatory.md).
- Objective event ids completion rules — [Objectives](/okf/progression/objectives.md).
- Tech tree structure — grid, edges, branches in [Tech tree structure](/okf/progression/tech-tree.md).

Resolved this pass (CDP `:9222`, 0.5.6):

- Public `sandkit.api.tech.getStatusById` — **confirmed absent**.
  Only engine `parseTechTree` derives status ([TechStatus](/okf/progression/tech-status.md)).
- Vanilla upgrade `itemId` / `upgradeId` pairs — **38** leaves on `store.upgrades` in [Upgrades](/okf/progression/upgrades.md).
- Worker-thread `store.upgrades` — **no mirror** on `__debug.state.shared`; main-thread `store.upgrades` is the source of truth.
- Live grid coordinates for every string-id node — full `getTechGrid()` via webpack module **77135** in [Tech tree structure](/okf/progression/tech-tree.md#live-grid-056).
- Mod `register()` upgrade pairs vs `store.upgrades` leaves — metadata on `sandkit.mods.upgrading` (definition objects) vs runtime `{ level, availableLevel }` on store; 10 mod pairs / 38 vanilla leaves on dev-tools save — [Upgrades](/okf/progression/upgrades.md#mod-metadata-shape-cdp-9222-dev-tools-save-056).
- Lexicon display names for numeric grid ids `71`, `81`, `85`, `86`, `106` — unlock-target cross-ref in [Tech tree structure](/okf/progression/tech-tree.md#numeric-grid-ids--lexicon-and-unlock-names-056).

Resolved this pass:

- `TechStatus.Unknown` / `Hidden` — reserved enum; vanilla `parseTechTree` never assigns **3** or **4** ([TechStatus](/okf/progression/tech-status.md#unknown-and-hidden-future-use)).

Still open:

- Re-probe if a future build assigns `TechStatus` **3** or **4** in live `parseTechTree` output.

Public `progression.complete` domains are only `tutorial` and `objective` (HTML).
No public API for tutorial, lexicon, or objectives besides that.
Conservatory unlocks: `api.tech.conservatory.appendUnlock`.

`getDefinitionById` / `player.tech` boolean map: [Tech](/okf/progression/tech.md) and [Enums](/okf/progression/enums.md).
