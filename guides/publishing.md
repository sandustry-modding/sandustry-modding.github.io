# Publishing to Steam Workshop

This page covers `workshop.json` and how it links a local mod folder to a Steam Workshop item.
Build and upload commands live in the [mod template](builds.md).

## workshop.json

After the first successful upload, the publisher writes `workshop/workshop.json` in your mod repo:

```json
{
  "$schema": "https://sandustry-modding.github.io/schemas/workshop.json",
  "schemaVersion": 1,
  "publishedFileId": "1234567890"
}
```

| Field | Role |
| ----- | ---- |
| `schemaVersion` | File format version. Must be `1`. |
| `publishedFileId` | Steam Workshop item id. Managed by the publisher — do not hand-edit. |

Types: [configs: WorkshopJson](../api/configs.md?id=workshopjson).
JSON Schema: [schemas/workshop.json](../types/schemas.md).

## First publish

You do **not** need `workshop.json` before the first upload.

The mod template `npm run publish` flow:

1. Runs `npm run build` to stage `build/<modinfo.id>/`.
2. Sends listing metadata from `workshop/workshop.md` (or `modinfo.description`).
3. Creates the Workshop item when no `publishedFileId` exists.
4. Writes `workshop/workshop.json` with the new id.

Prepare before upload:

- `workshop/preview.png` (or `preview.gif`) — listing image
- `workshop/workshop.md` — Steam description (Markdown converted to BBCode at upload)
- `CHANGELOG.md` — change notes (Keep a Changelog format)

Do not put links or raw URLs in `workshop.md` — Steam Workshop virus scan rejects them.

## Staging folder

`npm run build` copies the release bundle plus `workshop.json` only into `build/<modinfo.id>/`.
Preview images stay under `workshop/` and upload separately as the listing image.
`README.md`, `CHANGELOG.md`, and screenshots stay in the repo, not in the content folder.

## Commands

From the mod template repo:

```bash
npm run build                    # stage all src/ mods
npm run build -- --mod <folder>  # one mod
npm run publish                  # build + SteamCMD upload (interactive pick)
npm run publish -- --mod <folder>
```

Full SteamCMD setup, credentials, and flags: [Builds guide](builds.md).

## gameVersion and Workshop

Declare compatible game versions in [modinfo.json](modinfo.json.md).
Steam Workshop **Link to Game Version** should match your `gameVersion` caps for patch-heavy mods.

## Related

- [modinfo.json reference](modinfo.json.md)
- [Getting started](guides/getting-started.md)
- [Steam Workshop for Sandustry](https://steamcommunity.com/app/2764460/workshop/)
