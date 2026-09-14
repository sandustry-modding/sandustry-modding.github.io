---
type: Reference
title: Types package
description: Community TypeScript declarations for sandkit, site docs under types/, and npm install — secondary to official Sandkit HTML.
tags:
  - sandustry
  - okf
  - references
  - types
  - npm
status: stable
generated:
  by: human:ethan
  at: 2026-09-14T19:00:00Z
sources:
  - id: types-readme
    resource: /types/README.md
    title: Types README
  - id: npm-types
    resource: https://www.npmjs.com/package/@sandustry-modding/types
    title: "@sandustry-modding/types on npm"
  - id: official-sandkit
    resource: https://sandustry.com/sandkit.html
    title: Official Sandkit API
  - id: consume
    resource: /okf/consume.md
    title: Consume Sandustry OKF
---

# Types package

Community TypeScript declarations mirror the Sandkit object shape for editors and `tsc`.
They are a helper layer, not signature truth.
Follow [/okf/consume.md](/okf/consume.md) for OKF load order.[^consume]

## npm package

| Field | Value |
| --- | --- |
| Name | `@sandustry-modding/types`[^npm-types] |
| Install | `npm install @sandustry-modding/types`[^types-readme] |
| Source repo | [SandustryTypes](https://github.com/sandustry-modding/SandustryTypes) |

The mod template depends on this package for ambient `sandkit` typing in mod source.
Use a triple-slash reference or include the types through your `tsconfig` / `jsconfig` as described on [/types/](/types/).[^types-readme]

## Docs on this site under `/types/`

| Page | Purpose |
| --- | --- |
| [/types/](/types/) | Install, runtime map, and maintenance commands[^types-readme] |
| [/types/search.md](/types/search.md) | Search namespaces and members by live path |
| [/types/schemas.md](/types/schemas.md) | JSON Schema URLs for `modinfo.json` and `patches.json` |

Generated API Markdown lives under `/api/` and is produced from the same SandustryTypes tree.
See [/okf/api/generated-docs.md](/okf/api/generated-docs.md) for that split.

## Secondary to official Sandkit HTML

Use `@sandustry-modding/types` and generated pages for navigation, JSDoc prose, and compile-time safety.
Confirm method signatures on [https://sandustry.com/sandkit.html](https://sandustry.com/sandkit.html) before you ship mod code.[^official-sandkit]
Declarations can include members not yet on the official page, or miss members until SandustryTypes is updated.
When sources disagree, follow the official HTML.

## When to open which layer

| Need | Open first |
| --- | --- |
| Exact parameter list for a public method | [Official Sandkit HTML](https://sandustry.com/sandkit.html) |
| Editor autocomplete in the mod template | `@sandustry-modding/types` and [/types/](/types/) |
| Find which namespace owns a path | [/types/search.md](/types/search.md) |
| Manifest or patch JSON shape | [/types/schemas.md](/types/schemas.md) and `/modinfo.json.md` |

## Related OKF

- [OKF index](/okf/index.md)
- [How to read Sandkit](/okf/api/how-to-read-sandkit.md)
- [Official Sandkit reference](/okf/references/official-sandkit.md)
- [Template repo](/okf/references/template-repo.md)

[^consume]: Load order — [/okf/consume.md](/okf/consume.md).
[^types-readme]: Site types docs — [/types/](/types/).
[^npm-types]: npm registry — [https://www.npmjs.com/package/@sandustry-modding/types](https://www.npmjs.com/package/@sandustry-modding/types).
[^official-sandkit]: Signature truth — [https://sandustry.com/sandkit.html](https://sandustry.com/sandkit.html).
