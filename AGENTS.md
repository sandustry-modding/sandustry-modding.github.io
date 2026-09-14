# Docs agent notes

This repository is the Docsify site for https://sandustry-modding.github.io/.
The mod template clones it into `docs/` during `npm run setup`.

## Sandkit API reference

Generated pages live under `api/` and `full.md`.
Edit declarations in [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes), then run `npm run generate` there.
When that clone sits next to this site (template `docs/`), generate writes into this tree.
Do not hand-edit `api/` pages.

## Site pages

The install guide, folder layout, commands, and troubleshooting live in the [mod template README](https://github.com/IrishBruse/SandustryModTemplate).
Do not duplicate those pages here.

Keep kit and reference Markdown in this repo so Docsify can serve it.
Do not put a symlink inside this tree that points outside it.

In the template repo, `modkit/docs` is a symlink into `docs/modkit/`.
Write kit pages in `modkit/` here.
Do not put mod-specific pages under `modkit/`.

A mod with its own repo documents in that repo with `README.md` and `CHANGELOG.md`.

## Sample mod READMEs (`examples/*/README.md`)

Those files live in [SandustryExamples](https://github.com/sandustry-modding/SandustryExamples).
Short player-facing copy.

- Use lists for steps and controls.
  Do not use markdown tables.
- Match the tone and structure of the other sample READMEs.

## Mod `CHANGELOG.md` and Discord

### Mod `CHANGELOG.md` (Steam change notes)

Write for **players**, not developers.
Say what changed in play (controls, options, feel, fixes you can notice).
Keep technical notes in that mod's `README.md`.
`modkit/` is kit-only.

### `discord-post.md`

- Evergreen pitch only: Quick start and Features.
- Do not put a **What's new** / dated change list here.
- Update Features / Quick start only when those sections are wrong.
