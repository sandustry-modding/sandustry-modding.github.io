---
type: Reference
title: Gaps
description: Open internals questions and deprecated aliases not yet fully documented.
tags:
  - sandustry
  - okf
  - internals
  - gaps
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T20:00:00Z
---

# Gaps

Still open:

- Live attach to simulation / manager / utility workers (official worker surface: [Worker entry API](/okf/internals/worker-api.md))
- `engine.api.config` / `extend` argument meanings
- `__debug.admin.run` command strings
- `platforms/msstore.js` / `gog.js` (not in this Steam extract)
- `Noise` constructor API
- `webpackChunksand_v1` module ids
- Custom maps IPC payloads
- Full dumps of `shared.sim` / `store.world` binary buffers (too large)

Deprecated aliases: official HTML.
`api.factory.getProcessCount()` without an id throws — see [Factory: structures and pipes](/okf/factory/structures-and-pipes.md).

This Steam session: `typeof window.sandkit === "object"` and ambient `sandkit` both work.
Still verify after reload.
