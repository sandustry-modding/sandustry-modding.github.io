---
type: Reference
title: Tech and upgrades
description: Index for the progression guide — Research tree, upgrades, discoveries, story steps, and conservatory rewards.
tags:
  - sandustry
  - okf
  - progression
  - tech
  - upgrades
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: progression-guide
    resource: /guides/progression.md
---

# Tech and upgrades

## Trigger

Load this concept when your mod registers tech nodes, Management-tab upgrades, discovery log entries, tutorial or objective completion, or conservatory reward unlocks.[^progression-guide]

## Guide outline

The progression guide gates content through Research, upgrades, discoveries, and story steps on the main thread.
It documents tech definition and node registration with parent links and unlock payloads.
It lists lock and researched queries plus state mutators and definition patches.
It notes `tech:unlocked` events and built-in ids via `sandkit.enums.Tech`.
It covers upgrade categories, level costs, and purchased level getters and setters.
It explains marking elements and terrains in the discovery log.
It describes `progression.complete` for tutorial and objective steps with id caveats.
It documents conservatory append-unlock for ticket-based reward nodes.
It states there is no public tutorial or objectives namespace and points to events and engine tutorial build helpers instead.
It separates factory tier viability from Research and links to the factory guide.

## Pointers

- [Official Sandkit API](https://sandustry.com/sandkit.html) — signature truth for runtime shapes.
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md) — how to use generated member pages under `/api/`.
- Generated namespaces named in the guide:
  - [sandkit.api.tech](/api/sandkit.api.tech.md) and [sandkit.api.tech.conservatory](/api/sandkit.api.tech.conservatory.md)
  - [sandkit.api.upgrades](/api/sandkit.api.upgrades.md)
  - [sandkit.api.discoveries](/api/sandkit.api.discoveries.md)
  - [sandkit.api.progression](/api/sandkit.api.progression.md)
  - [sandkit.api.events](/api/sandkit.api.events.md)
  - [sandkit.enums.Tech](/api/sandkit.enums.Tech.md)
  - [sandkit.engine.api.tutorialBuild](/api/sandkit.engine.api.tutorialBuild.md) — internal; use only for vanilla build-step integration.

## Concept pages

Live vanilla facts for Early Access 0.5.5:

- [Tech](/okf/progression/tech.md) — API, researched state, locks
- [Upgrades](/okf/progression/upgrades.md) — categories, levels, item ids
- [Discoveries](/okf/progression/discoveries.md) — element and terrain log
- [Progression flags](/okf/progression/progression.md) — `complete` and dungeon flags
- [Viability](/okf/progression/viability.md) — factory tier store fields
- [Conservatory](/okf/progression/conservatory.md) — tickets and reward tech
- [Tutorial](/okf/progression/tutorial.md) — step machine
- [Objectives](/okf/progression/objectives.md) — HUD cards and story steps
- [Lexicon](/okf/progression/lexicon.md) — encyclopedia entries
- [Enums](/okf/progression/enums.md) — `Tech` and `TechStatus`
- [Store cluster](/okf/progression/store.md) — progression keys summary
- [Gaps](/okf/progression/gaps.md) — open questions
- [Probe](/okf/progression/probe.md) — read-only live inspection

## Related domains

- [Factory: structures and pipes](/okf/factory/structures-and-pipes.md) — factory level and process counters are factory progression, not Research.
- [Engine and workers](/okf/internals/engine-and-workers.md) — events, hooks, and load timing from the runtime guide.

## Sources

[^progression-guide]: Primary guide — [/guides/progression.md](/guides/progression.md).
