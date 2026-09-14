---
type: Reference
title: Gaps
description: Open questions and missing public APIs in the progression domain for Early Access 0.5.5.
tags:
  - sandustry
  - okf
  - progression
  - gaps
status: draft
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
---

# Gaps

Still open:

- Per-tech `TechStatus` without the Research UI helper
- Full conservatory roster and ticket curve beyond first-capture `2^n`
- All upgrade `itemId` / `upgradeId` pairs after extra mod registration
- Objective event ids (`burn_residue`, ...) completion rules
- Worker-thread `store.upgrades` (main thread is source of truth)

Public `progression.complete` domains are only `tutorial` and `objective` (HTML).
No public API for tutorial, lexicon, or objectives besides that.
Conservatory unlocks: `api.tech.conservatory.appendUnlock`.

`getDefinitionById` / `player.tech` boolean map: [Tech](/okf/progression/tech.md) and [Enums](/okf/progression/enums.md).
