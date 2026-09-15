---
type: Reference
title: Intro and Deploy scenes
description: New-game scenes 2 and 3 — story brief, drop-pod deploy, and skip paths from the 0.5.6 extract plus CDP probes.
tags:
  - sandustry
  - okf
  - ui
  - intro
  - deploy
  - scenes
status: stable
generated:
  by: agent:cursor
  at: 2026-09-15T20:30:00Z
sources:
  - id: extract
    resource: .tmp/asar-extract/dist/js/bundle.js
  - id: live-cdp
    resource: docs/okf/live/attach.md
---

# Intro and Deploy scenes

`store.scene.active`: **Intro = 2**, **Deploy = 3**, **Game = 4**.
See [DOM and scenes](/okf/ui/dom.md).

## Intro (scene 2)

UI component: `ComponentId.IntroScreen` (**20**) — [Overlay API](/okf/ui/overlay-api.md).

Session flag: `session.ui.introScreen.visible` (default `false` on main menu).

Scene triggers: three `{ done: false }` entries while on Intro.

### Story copy (`story|intro|*` i18n keys)

| Key | English text |
| --- | --- |
| `story\|intro\|title` | MISSION BRIEF |
| `story\|intro\|subtitle` | Planet PX-47 Assignment |
| `story\|intro\|heading` | Archon Pri // Sentinel Command (resolved from character/org keys) |
| `story\|intro\|welcome` | Welcome, Prospector. |
| `story\|intro\|reason` | Orbital overseer briefing for the Heliodyne Sand Survey Program on PX-47. |
| `story\|intro\|detailsLabel` | Objective |
| `story\|intro\|details` | Extract sand and build an initial gold production factory. |
| `story\|intro\|notesTitle` | INTEL REPORT |
| `story\|intro\|note1` | Archived data suggest an extinct high-tech civilization. |
| `story\|intro\|note2` | Colossal entities (COL-Θ) roam the dunes, unresponsive to contact. |

### Controls (i18n button labels)

| Key | Label |
| --- | --- |
| `story\|intro\|openButtonText` | ESTABLISH LINK |
| `story\|intro\|buttonText` | CONFIRM MISSION |
| `story\|intro\|skipIntro` | Skip Intro |
| `story\|intro\|sequenceReady` | SEQUENCE READY |
| `story\|intro\|launch` | LAUNCH |

After confirm, Zoe dispatch text plays (`story\|intro\|zoeDispatchReady`) and flow advances toward Deploy.

Engine skip: `sandkit.engine.api.game.start(state, { skip: true })` hides `introScreen` and jumps past Intro UI.

## Deploy (scene 3)

Drop-pod cinematic.
`session.rendering.pixi.sprites.player.dropPod.visible` becomes **true**.

Skip when `store.world.externalMap.deployment === "skip"` (custom / debug maps).

Otherwise the scene runs timed triggers (`store.scene.triggers`) with boost audio and camera motion until Game scene starts.

## Live CDP walk (0.5.6)

Main-menu **New** on this modding-beta session went straight to the bootstrap loader (`Starting game` / `Bootstrapping` / **Cancel**).
Intro and Deploy did **not** appear in the a11y tree before load began.

Returning to main menu via **Cancel** left `scene` **1** and did not overwrite an existing save.

First-run or non-skip `game.start` paths still use scenes 2 and 3 per extract.
A dedicated first-run save probe is still needed for full a11y capture.

## Related concepts

- [Screens](/okf/ui/screens.md) — main menu **New** row
- [DOM and scenes](/okf/ui/dom.md) — `Scene` enum values
- [Screen gaps](/okf/ui/gaps.md)
