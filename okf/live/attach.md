---
type: Playbook
title: Attach to Sandustry
description: Connect Chrome DevTools MCP to the Sandustry Electron renderer and pick a stable pageId.
tags:
  - sandustry
  - okf
  - live
  - attach
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
---

# Attach

Chrome DevTools MCP on the Sandustry Electron renderer.
Official Sandkit API: [official Sandkit](https://sandustry.com/sandkit.html).
After attach, open the matching OKF domain for vanilla facts.

## Steps

1. `GetDynamicTools` once for the tool you need (skip repeat discovery on the same tool).
2. `list_pages` — pick title **Sandustry**, URL `file://.../dist/index.html`.
3. Remember `pageId`; it changes after reload, reconnect, or a new tab.
   Re-run `list_pages` when a call fails or the game restarted.
4. Done when the next MCP call succeeds on that `pageId`.

## Ports

| Port    | Instance                                                                           |
| ------- | ---------------------------------------------------------------------------------- |
| `:9222` | Player / Steam / F5 debug renderer                                                 |
| `:9224` | Extracted-game Chromium (`npm run test:integration`, `.tmp/sandustry-test-chrome`) |

## Rules

Never kill Sandustry.
Ask the user for a hard reload when code or mods changed.
Restart the game (F5) after `worker.js` or `patches.json` changes.
Do not use save reload as a substitute on Steam.

## Click

Screen work → [UI: HUD and overlays](/okf/ui/hud-and-overlays.md) for labels and panel maps.

1. `take_snapshot` (prefer over screenshot).
2. Click `uid` from the **latest** snapshot.
   Uids die after DOM changes — snapshot again before the next click.
3. `press_key` when focus matters; use `includeSnapshot: true` to confirm.
   If keys are swallowed, dispatch `keydown` via `evaluate_script` or click **Menu [Esc]**.
4. `fill_form` beats many `fill`/`click` pairs on the same form.
5. Done when the target label or state flag appears in the latest snapshot or script result.

## Related

- [Evaluate](/okf/live/evaluate.md) — read live state with `evaluate_script`
- [Triage](/okf/live/triage.md) — when attach or click fails
