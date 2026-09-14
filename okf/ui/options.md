---
type: Reference
title: Options
description: Options dialog tabs, General/Video/Audio settings, and Mods configSchema inspector.
tags:
  - sandustry
  - okf
  - ui
  - options
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
sources:
  - id: sandkit-api
    resource: https://sandustry.com/sandkit.html
  - id: extract
    resource: sandustry/source/
---

# Options

Tabs: **General**, **Video**, **Audio**, **Controls**, **Mods**.
Footer: **Reset**, **Cancel**, **Save**.

**Mods** tab renders each loaded mod's `configSchema` — see [Mods host](/okf/internals/mods-host.md).
Controls list: [Keybindings](/okf/ui/bindings.md).

## General

**INTERFACE:** Language (e.g. Auto-detect (en)); UI Scale 50-150%; **Hide UI** (F4 / Esc).

**GAMEPLAY:** Hotbars spinbutton 1-10; Autosave switch.

**WHEN UNFOCUSED:** Keep Running; Mute Music; Mute Sounds.

## Video

**DISPLAY:** Fullscreen.

**PERFORMANCE:** Zoom 0-4; Frame Rate listbox (session: 144 FPS); Show FPS.

**ACCESSIBILITY:** Cursor Size 0.5-3.

## Audio

Master Volume, Music Volume, SFX Volume — 0-100%.

## Mods tab

Per-mod `configSchema` headings.
Types: boolean, number, choice.
Schema: [/config-schema.md](/config-schema.md).

This session:

**HOT RELOAD DEV TOOLS:** Mod enabled; Auto-load save; Start save (e.g. Mod storage); Disable autosave; Watch local mods; Open DevTools on load; F12 opens DevTools; F3 debug overlay.

**TEMPLATE:** Mod enabled.

## Related concepts

- [Pause menu](/okf/ui/pause.md)
- [Keybindings](/okf/ui/bindings.md)
