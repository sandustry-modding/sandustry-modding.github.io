---
type: Playbook
title: Evaluate scripts
description: Read live Sandustry state with evaluate_script — JSON-only returns, batching, and entry resolution.
tags:
  - sandustry
  - okf
  - live
  - evaluate
  - mcp
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
---

# Evaluate

Read live state with `evaluate_script`.

## Rules

- Set `waitForStableDom: false`.
- Return JSON-serializable data only; slice large strings (for example `.slice(0, 2000)`).
- Batch related reads in **one** function — not one call per field.
- Large output → `filePath` under `.tmp/`.

## Entry resolution

Use the first path that works:

```javascript
() => {
  const g = globalThis;
  const sk = typeof sandkit !== "undefined" ? sandkit : g.sandkit;
  const state = sk?.engine?.state ?? sk?.state ?? g.__debug?.state ?? null;
  return {
    hasSandkit: Boolean(sk?.api),
    hasDebug: Boolean(g.__debug),
    scene: state?.store?.scene?.active ?? null,
  };
};
```

Ambient `sandkit` works in `evaluate_script` on 0.5.5 (`hasSandkit: true` when `sandkit.api` exists).
**`window.sandkit` may still be missing** — check `typeof window.sandkit`; fall back to `__debug.state` for vanilla reads when needed.
Do not call mutators (`api.game.start`, saves, grid writes) unless the user asks.
Mutator bans live in each domain probe reference.

Done when the returned shape answers the question (or [Triage](/okf/live/triage.md) explains why not).

## Related

- [Probe internals](/okf/internals/probe.md) — host object safe/unsafe lists
- [Script templates](/okf/live/scripts.md) — reusable bundles
- [Attach](/okf/live/attach.md) — pick `pageId` before evaluate
