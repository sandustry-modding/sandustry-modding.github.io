# Integration tests

Node helpers for tests that talk to the **extracted game** in Chromium.
Import from `*.integration.test.ts` only.

```ts
import test from "node:test";
import { expect, setupGame } from "@modkit/test";

const game = await setupGame();

test("a", async () => {
  await game.evaluate(() => sandkit.api.player.getPositionAtWorld());
});

test("void world", async () => {
  await expect(game).toHaveScreenshot("void-world.png");
});
```

`setupGame()` connects once per test file.
Later calls in that file reuse the session.
The file closes the CDP socket when it finishes so the Node test worker can exit.

`npm test` runs **unit** files only (`*.test.ts`, not `*.integration.test.ts`).
It does not start Chromium.

`npm run test:integration`:

1. Builds `src/` with `--debug` into `dist/`.
  Builds `examples/` too when that folder is present (or when you pass `--examples`, which clones [SandustryExamples](https://github.com/sandustry-modding/SandustryExamples)).
2. Boots `sandustry/source/dist` in headless Chromium (CDP **:9224**).
3. Waits for boot to finish (`game:ready`, `#loading` removed, Game scene).
4. Runs every `*.integration.test.ts` with `--test-concurrency=1` (async spawn so
   the host HTTP server keeps serving `/mods/...` during the run).

Use **`npm run test:integration:view`** to open a visible Chrome window instead of headless.
That script passes `--view` to the runner.
On Linux it needs `DISPLAY`.

### Performance

The host is heavy: it boots the full game in Chromium with sim workers and WebGL.
To reduce lag on your machine (and on Steam Sandustry):

| Goal                        | Command                                      |
| --------------------------- | -------------------------------------------- |
| Run one mod only            | `nr test:integration template`               |
| Run one mod with a window   | `nr test:integration:view collector-element` |
| Run example samples only    | `nr test:integration --examples`             |
| Skip the full example build | pass a mod folder (or `--mod`)               |

Local runs:

- Use the GPU (SwiftShader only in `CI`, for screenshot baselines).
- Cap `navigator.hardwareConcurrency` at 4 so vanilla spawns about **2** sim workers (not ~`cores − 2`).
- Launch Chrome under `nice -n 10` and limit raster / renderer processes.
- Allow Chrome timer throttling (full frame-rate flags stay on in CI only).
- Pause the sim after boot until a test needs live frames.

Pass a mod folder name (or `--mod <folder>`) to build that mod, load only that
mod in the host, and run only its integration tests.
Repeat folders / `--mod`
to select several. Pass `--examples` to build every sample and run only
`examples/**/*.integration.test.ts`.

```bash
nr test:integration:view overlay-hotkey
nr test:integration template
nr test:integration overlay-hotkey i18n
nr test:integration --examples
```

If the host is not running, `setupGame()` throws.
Run integration files only through `npm run test:integration`.

When the tests finish, the host stops.
Do not open Chrome DevTools on that window while the tests run.
That steals CDP from the runner.

This host does not attach to Steam or F5, and it does not stop them.

| Item           | Path / value                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------- |
| Game files     | `sandustry/source/dist` (`npm run setup`)                                                      |
| Chrome profile | `.tmp/sandustry-test-chrome/`                                                                  |
| Test mods copy | `.tmp/sandustry-test/mods/`                                                                    |
| CDP            | **9224** (Steam / F5 stay on **9222**)                                                         |
| HTTP           | `http://127.0.0.1:4173` with COOP/COEP                                                         |
| Window         | Headless by default; `npm run test:integration:view` for a visible window                      |
| Viewport       | Locked once at host boot (1280×720). `:view` does not re-apply Emulation metrics per test file |

It copies every built mod from `dist/` (then fills gaps from the OS mods folder) and enables them. `--mod` copies only those mods.
It loads the tracked Void save `modkit/test/fixtures/Empty.save` with `?db_load=<meta.id>` (vanilla file name is `{id}.save`).
A harness mod sets `globalThis.sandkit`.
Dev-tools can fetch `main.js` from `/mods/<id>/`.
Vanilla HUD textures stay at `/mods/<file>.png` from extracted `dist/mods/`.
The host rewrites the served `js/bundle.js` so `assets.getUrl` / map blueprints accept HTTP `rootUrl` (vanilla join allows `file:` only). `sessionStorage.splashShown` is set; `?db_load=` still runs vanilla shader wait.

Import `@modkit/test` from test files only.
The esbuild alias rejects a game bundle import.
The module also throws if `document` exists.

`npm test` strips types.
Assign constructor arguments to fields in the constructor body.
Use `import type` for type-only imports.

Name integration files `*.integration.test.ts` (for example `src/template/template.integration.test.ts`).

Tests that write the same world (for example player position) must run in order.
Use `describe(..., { concurrency: false }, () => { ... })`.

## Session

| Call                                 | Role                                                                                          |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| `game.evaluate(fn, ...args)`         | Run `fn` in the renderer. Arguments must be JSON values. Closures do not capture Node locals. |
| `game.waitFor(read, match, options)` | Poll `read` in the page until `match` is true in Node. Steps the clock when one is installed. |
| `game.ticks(count)`                  | Step `count` renderer frames, each followed by one simulation tick.                           |
| `game.simTicks(count)`               | Step the simulation only.                                                                     |
| `game.renderFrames(count)`           | Step the renderer only. It hands queued world writes on; a tick applies them.                 |
| `game.seed(value)`                   | Seed `Math.random` in the renderer and every game worker, so a scenario repeats.              |
| `game.clockStatus()`                 | Frames pumped, ticks run, and whether the clock owns the game.                                |
| `game.clock`                         | The clock itself: `install`, `uninstall`, `simTick`, `withRealTime`.                          |
| `game.buildStructures(placements)`   | Build several structures in one renderer turn and wait for every anchor.                      |
| `game.buildLayout(layout)`           | Expand a visual fixture diagram into phased structure placements.                             |
| `game.setSimulationPaused(paused)`   | Pause or resume the simulation without opening the in-game pause menu.                        |
| `game.pauseSimulation()`             | Pause the simulation.                                                                         |
| `game.resumeSimulation()`            | Resume the simulation.                                                                        |
| `game.runSimulation(durationMs)`     | Run for a wall-clock duration. Prefer `ticks()`; see Simulation control.                      |
| `game.orderedModIds()`               | Return live `manifest.id` values from the ordered mod list.                                   |
| `game.screenshot(options)`           | Capture a PNG of the compositor (WebGL plus DOM). Returns a `Buffer`.                         |
| `game.withModMain(id, fn)`           | Edit the test-host `main.js`, then restore the original bytes.                                |
| `game.tryReadModMain(id)`            | Return the test-host bundle, or `null`.                                                       |

`waitFor` defaults: 8000 ms timeout, 250 ms interval.

Return values from `evaluate` must be JSON-serializable.

### Structure fixtures

`game.buildStructures(placements)` builds a batch of structures and waits for
their anchors to appear.
Each placement uses cell coordinates and can include
`options` or seeded `data`.
Seeded data is applied after the structure anchor
exists, which makes it reliable for custom structure initialization.

The helper resumes the simulation while building, then restores its previous
pause state.
An empty placement list is a no-op.

For fixtures that are easier to understand as a diagram, use
`game.buildLayout()`.
Each character represents one structure on a 4-cell
grid; `.` leaves a cell empty:

```ts
await game.buildLayout({
  origin: { x: 2400, y: 1612 },
  cells: ["fff", "fsf", "fff"],
  legend: {
    f: { type: "foundation" },
    s: { type: "mySource", data: { mode: "sand" } },
  },
});
```

Use `phases` when placement order matters.
Every phase is expanded and built
before the next phase begins:

```ts
await game.buildLayout({
  origin: { x: 2400, y: 1612 },
  phases: [
    {
      cells: ["fff", "f.f", "fff"],
      legend: { f: { type: "foundation" } },
    },
    {
      cells: ["...", ".s.", "..."],
      legend: { s: { type: "mySource" } },
    },
  ],
});
```

The top-left character is placed at `origin`; columns and rows add four cells
per step.
Use either top-level `cells` and `legend`, or `phases`, but not both.

### Simulation control

Sandustry runs on two `requestAnimationFrame` loops.
The renderer's own loop draws frames and drains queued world writes, and the
manager worker's fixed-timestep loop drives every simulation tick at 1/60 s.
A test that sleeps and hopes races both of them, so the same assertion can pass
on a workstation and fail on a loaded CI runner.

Step the game instead:

```ts
await game.ticks(60); // 60 renderer frames, each with one simulation tick
```

`ticks()` installs the clock the first time it is called.
From then on the game advances only when a test says so: wall-clock time changes
nothing.
Each step is one renderer frame and then one simulation tick, so renderer work
and simulation work interleave the way they do in a running game.

| Call                          | What it advances                             |
| ----------------------------- | -------------------------------------------- |
| `game.ticks(n)`               | `n` frames, each with one simulation tick    |
| `game.simTicks(n)`            | `n` simulation ticks, renderer held still    |
| `game.renderFrames(n)`        | `n` renderer frames, simulation held still   |
| `game.clock.withRealTime(ms)` | `ms` worth of ticks, paced to the wall clock |
| `game.clock.simTick()`        | nothing: reports the engine's tick counter   |

Element writes such as `createAtCell` are queued: a renderer frame hands one to
the simulation, and the next tick applies it.
A fixture therefore needs at least one full step — `ticks(1)` — before it
exists; neither `renderFrames()` nor `simTicks()` alone will do it.
`game.waitFor()` steps the clock rather than sleeping while one is installed,
which is why `buildStructures()` and friends keep working under it.
Pass `ticksPerPoll` to step more per poll.

#### Repeatable scenarios

Stepping fixes *when* the game advances.
It does not fix the choices the engine makes while advancing: the manager picks
a random scan offset each tick and passes it into every worker's update, and the
workers draw their own random numbers.
Seed those too, before each run you want to compare:

```ts
for (let run = 0; run < 5; run += 1) {
  await clearArea();
  await game.seed(12345);
  await dropSand();
  await game.ticks(150);
  // every run ends with the grain in the same cell
}
```

`game.seed()` replaces `Math.random` in the renderer and in every game worker,
then resets it to the given value.

#### Real time

`game.clock.uninstall()` hands both loops back to the browser.
Stepping runs the game's clock ahead of the wall clock, because a pumped frame
costs far less than the 1/60 s it stands for, so a game handed back this way
idles until wall time catches up with the time already stepped.
That is fine for teardown, and a later `install()` steps out of the debt on its
own.

`runSimulation(durationMs)` still works and still takes that long.
With a clock installed it steps at wall-clock pace instead of racing it, which
keeps the tick count exact.

`pauseSimulation()` and `resumeSimulation()` set the renderer's pause flag *and*
tell the manager worker, because the renderer flag alone leaves sand falling.
Both are no-ops while the clock is installed: the game is already frozen between
steps.

#### If the game updates

The clock talks to the manager worker over the engine's own worker protocol,
whose message ids are not part of the sandkit surface.
They live in one table in `modkit/test/clock.ts`, and `install()` proves them
against a live tick, so a game update that moves them fails loudly with that
file named rather than silently stepping nothing.

## Screenshots

`expect(game).toHaveScreenshot(name)` captures, then compares against a PNG next to the test file. `expect(png).toMatchSnapshot(name)` compares a buffer you already captured.
Value checks stay on `node:assert`.

| Item             | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| Baseline folder  | `<file>.integration.test.ts-snapshots/`                  |
| File name        | `{name}-chromium-{platform}.png`                         |
| Fail artifacts   | `.tmp/sandustry-test-screenshots/`                       |
| Update baselines | `npm run test:integration -- --test-update-snapshots`    |
| Missing snapshot | Write the PNG, then fail. In `CI`, fail without a write. |
| Retry            | Same as `waitFor`: 8000 ms timeout, 250 ms interval      |

Capture options:

| Option       | Role                                           |
| ------------ | ---------------------------------------------- |
| `clip`       | CSS-pixel rectangle                            |
| `selector`   | Clip to a DOM node (`getBoundingClientRect`)   |
| `mask`       | CSS selectors painted `#FF00FF` before capture |
| `path`       | Write the PNG to that path                     |
| `animations` | `"disabled"` (default) or `"allow"`            |

Compare options: `maxDiffPixels`, `maxDiffPixelRatio`, `threshold` (default `0.2`).

Game rules:

- The host uses SwiftShader only in CI so PNG baselines match across machines.
  Local runs prefer the GPU.
- The test page reports `hardwareConcurrency` as 4 so vanilla keeps about two sim workers.
- Chrome launches under `nice -n 10` (Unix) with fewer raster threads.
- After boot the host pauses the sim (`session.paused`) until a test needs live frames.
- `animations: "disabled"` pauses the sim (`session.paused`), then waits on a short timer.
  It does not open the pause menu.
  It does not use `requestAnimationFrame` (pause can
  stop the page frame loop and hang CDP).
- Prefer `selector` or `mask` for HUD clocks and other live UI.

Kit smoke: `modkit/test/game.integration.test.ts`.
Template: `src/template/template.integration.test.ts`.
Samples: every `examples/**/*.integration.test.ts`.
