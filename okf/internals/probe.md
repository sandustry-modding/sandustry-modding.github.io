---
type: Playbook
title: Probe internals
description: Read-only inspection rules for live host objects — safe keys, sync getters, and mutator bans.
tags:
  - sandustry
  - okf
  - internals
  - probe
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
---

# Probe

Read-only inspection of live host objects.
Return JSON-serializable data only.

## Steps

1. Read keys and call **sync getters** only (`getPlatformSync`, `getSystemInfo`, `isFilePatchingActiveSync`).
2. Done when the named object's keys (or the matching internals reference) match the live object.

Do not invoke: `appQuit`, `save` / `load` / `deleteSave`, `saveSettings`, `setFullscreen`, workshop subscribe/unsubscribe/download, achievement unlock/clear, `engine.api.game.*`, `__debug.admin.run`, `__debug.setSchedulingMode`.

## Safe

- `Object.keys` / `getOwnPropertyNames` on `sandkit`, `sandkit.engine.api`, `sandkit.state.*`, `window.electron`, `__debug`.
- Sync electron: `getPlatformSync`, `getIsSteamDeckSync`, `getPreferredSystemLanguagesSync`, `isFilePatchingActiveSync`, `getLastPlayedGameSync`, `getSystemInfo`, `saveExistsSync`.
- Read fields on `__debug.config` (plain data).
`sandkit.state === sandkit.engine.state === __debug.state`.

## Unsafe (needs user ask)

- Any `ipcRenderer.invoke` that writes disk or Steam (save, settings, workshop, achievements, quit).
- `sandkit.engine.api.game.load|save|start` and public `sandkit.api.game.start`.
- Engine mutators (`factory.unlockNextTier`, `drones.spawn`, `teleportZones.teleportPlayerTo`, `queue.process`, `wall.setWallDataAt`).
- `__debug.admin.run`, `__debug.moveCamera`, `__debug.setSchedulingMode`, `__debug.ensureQueuedStructuresAreBuilt`.

For MCP `evaluate_script` rules, see [Evaluate](/okf/live/evaluate.md).
