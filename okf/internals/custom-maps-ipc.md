---
type: Reference
title: Custom maps IPC
description: electron.customMaps invoke payloads and on-disk layout from preload and main process source.
tags:
  - sandustry
  - okf
  - internals
  - electron
  - custom-maps
status: stable
generated:
  by: human:ethan
  at: 2026-09-15T20:00:00Z
sources:
  - id: preload
    resource: sandustry/source/preload.js
  - id: main
    resource: sandustry/source/main.js
---

# Custom maps IPC

Renderer API: `window.electron.customMaps` (see [Electron bridge](/okf/internals/electron.md)).

## Invoke channels

| Preload method | IPC channel | Args | Returns |
| --- | --- | --- | --- |
| `save(id, name, data)` | `custom-map-save` | `{ id, name, data }` | `{ success, path? }` or `{ success: false, error }` |
| `load(id)` | `custom-map-load` | map id string | full map object or `null` |
| `list()` | `custom-map-list` | none | metadata array |
| `delete(id)` | `custom-map-delete` | map id string | `{ success }` or `{ success: false, error }` |

## On-disk file

Path: `<customMapsFolder>/<sanitizedId>.custommap`.

Two-line text file (same pattern as saves):

1. Line 1 — JSON metadata extracted at save time: `{ id, name, seed, createdAt, version, params }` from `data`.
2. Line 2 — full JSON `data` blob passed to `save`.

`load` parses line 2 only.
`list` reads line 1 from every `*.custommap` file and sorts by `createdAt` descending.

## Save handler details

- `id` and `name` in the invoke args are present but the written metadata comes from fields on `data`.
- Map id is sanitized with the same filename sanitizer as saves.
- MS Store path: returns `{ success: false, error: 'No active Xbox user' }` when no custom maps folder is available.

## Related concepts

- [Electron bridge](/okf/internals/electron.md)
- [Mods host](/okf/internals/mods-host.md) — map blueprint size limits
