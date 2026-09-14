# Getting started

A Sandustry mod is a folder the game loads from the OS mods directory or Steam Workshop.
The folder needs a manifest and at least one script entry point.

## What you need

- Sandustry with the **[mods]** beta (Steam → Library → Properties → Betas).
- Node 24 if you use the [mod template](https://github.com/IrishBruse/SandustryModTemplate) for TypeScript builds.
- [`@sandustry-modding/types`](https://www.npmjs.com/package/@sandustry-modding/types) for Sandkit API types and editor JSON Schema URLs.

## Minimal mod folder

```
my-mod/
├── modinfo.json
└── main.js
```

Example `modinfo.json`:

```json
{
  "$schema": "https://sandustry-modding.github.io/SandustryTypes/schemas/modinfo.json",
  "manifestVersion": 1,
  "id": "author.my-mod",
  "name": "My Mod",
  "version": "0.0.1",
  "apiVersion": 1,
  "entry": "main.js"
}
```

Example `main.js`:

```js
/// <reference types="@sandustry-modding/types" />

sandkit.api.hooks.register("game:started", () => {
  sandkit.api.ui.toast.show("My mod loaded");
});
```

Field details: [modinfo.json reference](guides/modinfo.md).
Type shapes: [configs](../api/configs.md).

## TypeScript workflow

The community [mod template](https://github.com/IrishBruse/SandustryModTemplate) compiles `main.ts` to `main.js` and copies the bundle into the game mods folder.

Quick start there:

```bash
git clone https://github.com/IrishBruse/SandustryModTemplate.git
cd SandustryModTemplate
npm install
npm run setup
npm run dev
```

Then press **F5** in VS Code (or run `npm run sandustry`) to launch the game with your mod.

## Where to go next

- [The mod lifecycle](guides/mod-lifecycle.md) — how mods load and when your code runs
- [World and grid](guides/world.md) — cells, elements, and `grid.mutate`
- [UI](guides/ui.md) — toasts, overlays, and HUD
- [Search](../search.md) — browse the generated Sandkit API
- [Official Sandkit API](https://sandustry.com/sandkit.html#api-access-heading) — host API from the game
