# Install

TypeScript declarations for the live Sandustry `sandkit` API.
Package name: `@sandustry-modding/types`.

```bash
npm install @sandustry-modding/types
```

Put this at the top of `main.js` / `worker.js`, or in an ambient `.d.ts` that your `tsconfig` / `jsconfig` includes:

```ts
/// <reference types="@sandustry-modding/types" />
```

That works in `.ts` and `.js` (including checked JS with `checkJs`).
Do not list `@sandustry-modding/types` under `compilerOptions.types`.
That list only loads packages from `node_modules/@types`.

Use the ambient name `sandkit` in `main.js`.
Type `sandkit.api` as `WorkerSandkitApi` in `worker.js`.

Browse namespaces in the sidebar, or open [Search](search.md).
