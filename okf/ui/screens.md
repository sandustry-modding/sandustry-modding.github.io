---
type: Reference
title: Screens
description: Main menu, exit flow, workshop Mods, and custom Maps screens from live CDP walks on 0.5.6.
tags:
  - sandustry
  - okf
  - ui
  - screens
  - main-menu
status: stable
generated:
  by: agent:cursor
  at: 2026-09-15T21:45:00Z
sources:
  - id: live-cdp
    resource: docs/okf/live/attach.md
  - id: extract
    resource: sandustry/source/
---

# Screens

Live walk on CDP `:9222` (F5 dev session, Early Access **0.5.6**).
`store.scene.active` is **1** on the main menu and **4** in a run.

## Main menu (scene 1)

Left column rows (`cursor-pointer`, not `<button>`):

| Label     | Role                          |
| --------- | ----------------------------- |
| Continue  | Resume last autosave / run    |
| New       | Start new game flow           |
| Load      | [Save and load](/okf/ui/save-load.md) from title |
| Options   | [Options](/okf/ui/options.md) |
| Quit      | Leave application             |
| Mods      | Workshop Mods overlay       |
| Maps      | Custom Maps overlay           |

Top-left: **Debug**, **Stats ▸** (same labels as in-game HUD).

Right panel: heading **Modding Beta Branch**, developer note (F2 feedback, switch to default branch for vanilla), **Lantto** signature, social links.

Footer: **Discord** (live member counts), **Reddit** • **YouTube**, **Early Access 0.5.6**, **Send feedback**, **Credits**.

`session.windows` keys from [DOM and scenes](/okf/ui/dom.md) apply once a run starts.
Title screen itself uses `ComponentId` **MainMenuActions** (30) per [Overlay API](/okf/ui/overlay-api.md).

## Exit game dialog

Pause **Exit** opens a modal (not a pause row).

| Control                         | Type              |
| ------------------------------- | ----------------- |
| Heading **Exit Game**           | h2                |
| **Save the game before exiting** | checkbox, default on |
| **Exit to Main Menu**           | row               |
| **Exit to Desktop**             | row               |
| **Cancel**                      | row               |

## Workshop Mods (`modsScreen`)

Opened from main-menu **Mods** (sets `session.windows.modsScreen.open`, `ComponentId` **ModsScreen** 26).
This is not the in-game **Options → Mods** `configSchema` inspector ([Options](/okf/ui/options.md)).

### Feature flag (0.5.6 modding beta)

Game config `mods.showSubscribedMods` is **`false`** on the modding beta branch (webpack module **90823**).
When the flag is off, the screen never loads the subscribed list even if Steam initializes.

### Live walk (CDP `:9222`, Steam binary, 2026-09-15)

| Part  | a11y text |
| ----- | --------- |
| Title | **Workshop Mods** |
| Body  | **Steam is not available.** Launch the game via Steam to use Workshop mods. |
| Close | button |

`electron.platform.isInitialized()` returned **`false`** in the same session.
`platform.workshop.getSubscribedItems()` returned `{ ok: false, error: "Steam not initialized" }`.
`electron.localMods.list()` still worked (`irishbruse.selection-capture` in the local folder).
`platform.workshop.getSandkitMods()` returned the loaded mod manifest set.

When `showSubscribedMods` is **`true`** and Steam initializes, the bundle renders the full workshop UI below.

### Full UI when `showSubscribedMods` is true (extract 0.5.6)

| Section | Controls / copy |
| ------- | ---------------- |
| Header | **Workshop Mods**, **Close** (Escape dismisses) |
| Browse | **Browse Workshop** + hint (Steam Workshop subscribe flow) |
| Install by id | **Workshop Item ID** text field, **Install** / **Installing...** |
| Subscribed list | **Subscribed Mods ({count})** heading |
| Empty subscribed | **No mods installed.** + hint to enter an id or browse |
| Row (per item) | Title (or **Mod {id}** fallback), **ID: {id}**, status pill |
| Status pills | **Installed**, **Downloading {percent}%**, **Pending**, **Update Available**, **Subscribed** |
| Row actions | **Open in Workshop**, **Unsubscribe** |
| Local mods | **Loaded local mods ({count})**, version • folder, author, **Open**, **Upload** |
| Create mods | **Create mods**, documentation blurb, **Open folder**, restart hint |

Workshop IPC (renderer): `electron.platform.workshop.getSubscribedItems`, `getItem`, `installInfo`, `downloadInfo`, `subscribe`, `unsubscribe` — [Electron bridge](/okf/internals/electron.md).

Alternate bodies when gated:

| Condition | Body copy key |
| --------- | ------------- |
| `showSubscribedMods` false, Steam init ok | `ui\|mods\|comingSoon` (switch to **mods** Steam branch) |
| Electron runtime, Steam not init | `ui\|mods\|steamUnavailable` + `ui\|mods\|launchViaSteam` (live walk above) |
| Non-Steam platform | `ui\|mods\|platformUnavailable` |
| Non-Electron runtime | `ui\|mods\|desktopOnly` |

## Custom Maps (`customMapsScreen`)

Opened from main-menu **Maps** (`session.windows.customMapsScreen.open`, `ComponentId` **CustomMapsScreen**).

### Feature flag (0.5.6 modding beta)

Game config `customMaps.showCustomMaps` is **`false`** on the modding beta branch.
When off, the screen shows only the coming-soon stub (live walk below).

### Live walk (CDP `:9222`, 2026-09-15)

| Part  | a11y text |
| ----- | --------- |
| Title | **Custom Maps** |
| Body  | **Coming soon...** |
| Close | button |

`electron.customMaps.list()` returned **`[]`** on the same session (IPC works; no saved maps).

### Full UI when `showCustomMaps` is true (extract 0.5.6)

| Section | Controls / copy |
| ------- | ---------------- |
| Header | **Custom Maps**, **Close** (Escape) |
| List heading | **Saved Maps ({count})** |
| Empty | **No custom maps saved.** |
| Row | Map name, **Seed: {seed}**, created date, **Play** (starts new game), delete (trash icon, `ui\|common\|delete`) |
| Errors | `ui\|customMaps\|error\|load`, `ui\|customMaps\|error\|delete` |

Persistence: renderer `electron.customMaps` → main-process `custom-map-*` IPC.
On-disk `*.custommap` layout: [Custom maps IPC](/okf/internals/custom-maps-ipc.md).
The enabled UI also mirrors saves in renderer IndexedDB before syncing through IPC.

## New game flow

**New** starts `game.start` (bootstrap loader on live modding-beta session).
Intro (scene **2**) and Deploy (scene **3**) precede Game when not skipped.

Full story copy, controls, and skip paths: [Intro and Deploy](/okf/ui/intro-deploy.md).

Live note: this CDP session jumped from **New** to the loader without Intro/Deploy a11y nodes.
**Cancel** on the loader returned to main menu without overwriting saves.

## Not walked this session

- Main-menu **Load** slot list (same component family as in-run load).
- Intro / Deploy a11y on a verified first-run save.

## Related concepts

- [Intro and Deploy](/okf/ui/intro-deploy.md)
- [Pause menu](/okf/ui/pause.md)
- [DOM and scenes](/okf/ui/dom.md)
- [Screen gaps](/okf/ui/gaps.md)
