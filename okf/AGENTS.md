# OKF agent rules

`docs/okf/` is the Open Knowledge Format bundle for **Sandustry the game**.
It holds facts agents can trust about vanilla behavior, Sandkit, and the engine.

Read this file before you add or edit anything under `docs/okf/`.

## In scope

Write only content that describes the **shipping game** and its **public Sandkit surface**.

Good sources:

- Extracted game source under `sandustry/source/` (after template setup)
- [Official Sandkit API](https://sandustry.com/sandkit.html)
- Live probes documented under `docs/okf/live/`
- Generated API pages from [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes)

Examples of in-scope topics:

- World grid, elements, terrains, structures, energy, player, UI, progression, entities
- `sandkit.api.*` and `sandkit.engine.*` behavior as the game exposes it
- Engine boot, workers, state, and host bridge facts

Mark uncertainty in `gaps.md` or probe notes.
Do not invent APIs or game behavior.

## Out of scope

Do **not** put these in OKF:

| Out of scope | Put it instead |
| --- | --- |
| Mod template repo layout, npm scripts, F5 dev flow | Template root `README.md` |
| `@modkit/*`, modkit React helpers, template patches | `docs/modkit/` and template repo |
| Workshop publish steps, SteamCMD, release skills | Template root `README.md`, `docs/guides/publishing.md` |
| Third-party mods (options, controls, changelogs) | That mod's repo `README.md` / `CHANGELOG.md` |
| Sample mod walkthroughs | [SandustryExamples](https://github.com/sandustry-modding/SandustryExamples) |
| Template-specific tooling (esbuild config, dev-tools mod) | Template repo docs, not OKF |

Do not document IrishBruse mods or other workshop mods here.
Do not duplicate the mod template install guide.

## Legacy pointers

`docs/okf/references/template-repo.md` is a short external link only.
Do not add kit or template workflow pages under OKF.
Use `/guides/`, `/modkit/`, and the mod template README instead.

## Where to document what

| Need | Location |
| --- | --- |
| Vanilla game or Sandkit fact | Matching domain under `docs/okf/<domain>/` |
| Mod template workflow | Template root `README.md` |
| Shared mod authoring kit | `docs/modkit/` |
| Site-wide docs editing rules | `docs/AGENTS.md` |
| Template workspace rules | Template root `AGENTS.md` |

## Markdown prose

Put each sentence on its own line in markdown files.
Do not join multiple sentences on one line.
Tables, fenced code blocks, and headings are excluded.

## New findings

When you learn something new about vanilla game behavior:

1. Pick the matching domain (`world`, `factory`, `player`, etc.).
2. Add or update **one** concept file there.
3. Note gaps in that domain's `gaps.md` when proof is missing.
4. Log bundle-level moves in `docs/okf/log.md`.

Do not create OKF pages for mod-only behavior.
