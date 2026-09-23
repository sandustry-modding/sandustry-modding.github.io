# Docs agent notes

This is the Docsify site for https://sandustry-modding.github.io/.
The mod template clones it into `docs/` during `npm run setup`.

## Trees

| Tree | Write |
| --- | --- |
| `okf/` | Vanilla game and Sandkit facts — [okf/AGENTS.md](/okf/AGENTS.md) |
| `modkit/` | Shared kit pages |
| `api/`, `full.md` | Generated from [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) — do not hand-edit |

Game facts: [llms.txt](/llms.txt) then [okf/consume.md](/okf/consume.md).
Install, layout, and commands: [mod template README](https://github.com/sandustry-modding/SandustryModTemplate).
Each other mod: that repo's `README.md` and `CHANGELOG.md`.

## Site

OKF is for agents and `/#/okf/...` deep links — not the navbar.
Browser tools are standalone HTML under `/tools/` — not Docsify routes.
Write kit pages in `modkit/` here.
`modkit/docs` in the template is a symlink into `docs/modkit/`.

