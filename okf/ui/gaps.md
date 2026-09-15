---
type: Reference
title: Screen gaps
description: Vanilla screens not yet walked in the UI OKF capture.
tags:
  - sandustry
  - okf
  - ui
  - gaps
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T21:45:00Z
sources:
  - id: extract
    resource: sandustry/source/
---

# Screen gaps

Walked on CDP `:9222` (0.5.6): [Screens](/okf/ui/screens.md), [Overlays](/okf/ui/overlays.md), [Research](/okf/ui/research.md) Conservatory, [Pause menu](/okf/ui/pause.md) exit dialog, [Intro and Deploy](/okf/ui/intro-deploy.md) (extract + partial live).

Resolved this pass (CDP `:9222`, 0.5.6, 2026-09-15):

- **Workshop Mods** — live Steam-unavailable walk + full subscribed-list UI from extract when `mods.showSubscribedMods` is true in [Screens](/okf/ui/screens.md#workshop-mods-modsscreen).
  Live subscribed rows still need `platform.isInitialized()` **and** the feature flag on a default-branch build.
- **Custom Maps** — live coming-soon stub + full saved-map UI from extract when `customMaps.showCustomMaps` is true in [Screens](/okf/ui/screens.md#custom-maps-custommapsscreen).
- **Radial (E) a11y** — held-**E** keydown probe: **zero** `aria-label` nodes; clip-path id pattern documented in [Overlays](/okf/ui/overlays.md#radial-menu-e).

Resolved in prior passes:

- **New → Intro / Deploy** — [Intro and Deploy](/okf/ui/intro-deploy.md).
- **World map (M)** — [Overlays](/okf/ui/overlays.md#world-map-m).
- **Radial wedge list** — `store.player.buildings` + Lexicon table in [Overlays](/okf/ui/overlays.md#radial-menu-e).
- **Tech tree graph display names** — Lexicon `kind: "tech"` map in [Research](/okf/ui/research.md).

Still open:

- Workshop Mods **subscribed row** a11y walk when Steam initializes and `showSubscribedMods` is true (modding beta keeps the flag off).
- Custom Maps **saved-map row** a11y walk when `showCustomMaps` is true.
- Intro / Deploy full a11y walk on a verified first-run `game.start` without `{ skip: true }`.

## Related concepts

- [DOM and scenes](/okf/ui/dom.md)
- [Debug overlay](/okf/ui/debug.md)
- [Research](/okf/ui/research.md)
