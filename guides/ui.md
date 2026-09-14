# UI and HUD

`sandkit.api.ui` is the main-thread API for HUD updates, overlays, dialogs, and React UI in the renderer.
Use it from your mod `entry` script.
Workers share only [toast](../api/sandkit.api.ui.worker.md) — see [Worker mods](guides/worker-mods.md).

Full reference: [sandkit.api.ui](../api/sandkit.api.ui.md).
For reusable React widgets from the mod template kit, see the [kit UI overview](ui/overview.md) (separate from Sandkit `api.ui`).

## Main thread only

React hooks (`useRefresh`, `useScale`, `useGameEvent`, `useHotbar`, `navigation.useFocusable`) and mount APIs (`inject`, `regions`, `overrides`) run in `main.js`.
Build UI with `sandkit.react.createElement` inside `render` functions and injected components.

## HUD and built-in screens

Vanilla HUD pieces are registered UI components.
Pass a [ComponentId](../api/sandkit.enums.ComponentId.md) string (for example `"resources"`, `"hotbar"`, `"options"`) to [`update`](../api/sandkit.api.ui.md?id=update) to push new state.
Call [`useRefresh`](../api/sandkit.api.ui.md?id=userefresh) in a React subtree to re-render when those components change.

[`openPauseMenu`](../api/sandkit.api.ui.md?id=openpausemenu) opens the Esc pause menu (Continue, Save, Load, Options, Exit).
There is no separate API to edit the Options screen schema; use [`inject`](../api/sandkit.api.ui.md?id=inject) or [`overrides.register`](../api/sandkit.api.ui.overrides.md?id=register) for custom panels.

## Toast and tooltips

Show short feedback with [`toast`](../api/sandkit.api.ui.worker.md?id=toast):

```ts
sandkit.api.ui.toast({ key: "mods|example|saved" });
sandkit.api.ui.toast("Plain text", { variant: "hint", duration: 3000 });
```

[`ToastOptions`](../api/sandkit.api.ui.worker.md?id=toastoptions) controls cooldown, style, and auto-dismiss.
[`LocalizedText`](../api/sandkit.api.ui.worker.md?id=localizedtext) accepts plain strings, `{ key, params? }`, or `sandkit.api.i18n.translatable` values.

[`showTooltip`](../api/sandkit.api.ui.md?id=showtooltip) shows a message tooltip near the cursor or target:

```ts
sandkit.api.ui.showTooltip({ type: "message", text: { key: "mods|example|hint" } });
```

## Dialogs and pickers

Modal dialogs return promises.
Use them from async handlers or `await` in hook callbacks.

| API | Returns |
| --- | --- |
| [`alert`](../api/sandkit.api.ui.md?id=alert) | `Promise<void>` |
| [`confirm`](../api/sandkit.api.ui.md?id=confirm) | `Promise<boolean>` |
| [`prompt`](../api/sandkit.api.ui.md?id=prompt) | `Promise<string \| null>` |
| [`select`](../api/sandkit.api.ui.md?id=select) | `Promise<T \| null>` |

Example choice picker:

```ts
const picked = await sandkit.api.ui.select(
  [
    { label: "Sand", value: "sand" },
    { label: "Fluxite", value: "fluxite" },
  ],
  { title: "Select element", defaultValue: "sand", buttonLabel: "Choose" },
);
```

## Regions and overlays

Prefer [`regions.mount`](../api/sandkit.api.ui.regions.md?id=mount) over deprecated [`overlays`](../api/sandkit.api.ui.overlays.md).
Known [OverlaySlot](../api/sandkit.api.ui.md?id=overlayslot) values include `"hotbar"` and `"global"`.

```ts
const handle = sandkit.api.ui.regions.mount("hotbar", "extra-actions", {
  placement: "docked",
  order: 0,
  render: () => sandkit.react.createElement(ExtraActions),
});
// later: handle.update({ order: 10 }); handle.unmount();
```

[`regions.setVisible`](../api/sandkit.api.ui.regions.md?id=setvisible) hides a region until you call `restore()` on the returned handle.
`placement: "docked"` sits on the hotbar; `"raised"` sits above panels such as Filter Config.

[`inject`](../api/sandkit.api.ui.md?id=inject) mounts a React component at a [ComponentId](../api/sandkit.api.ui.md?id=componentid) slot and returns an unmount function.
[`overrides.register`](../api/sandkit.api.ui.overrides.md?id=register) wraps a built-in component — useful to add content beside Resources or Hotbar without replacing vanilla logic.

## Hotbar

[`hotbar.createBankSource`](../api/sandkit.api.ui.hotbar.md?id=createbanksource) adds extra action banks.
Pair it with [`components.ActionSlot`](../api/sandkit.api.ui.components.md?id=actionslot) in a region mount.

```ts
const source = sandkit.api.ui.hotbar.createBankSource({ bankOffset: 1, minimumBankCount: 2 });
sandkit.api.ui.hotbar.selectAction(myAction);
const { bankCount, activeBankIndex, activeSlotIndex } = sandkit.api.ui.hotbar.useHotbar();
```

[`getBankCount`](../api/sandkit.api.ui.hotbar.md?id=getbankcount), [`getActiveBankIndex`](../api/sandkit.api.ui.hotbar.md?id=getactivebankindex), [`getActiveSlotIndex`](../api/sandkit.api.ui.hotbar.md?id=getactiveslotindex), and [`getSlotKeyLabel`](../api/sandkit.api.ui.hotbar.md?id=getslotkeylabel) work outside React.

## Built-in components

[`components.Panel`](../api/sandkit.api.ui.components.md?id=panel), [`components.Button`](../api/sandkit.api.ui.components.md?id=button), and [`components.ActionSlot`](../api/sandkit.api.ui.components.md?id=actionslot) match vanilla styling.
Use them inside `regions.mount` render functions or injected components.

## Controller navigation

[`navigation.useFocusable`](../api/sandkit.api.ui.navigation.md?id=usefocusable) registers a focusable element in a scope.
[`navigation.useFocusScope`](../api/sandkit.api.ui.navigation.md?id=usefocusscope) sets scope priority, default focus, and back handling.
[`getControllerFocusClass`](../api/sandkit.api.ui.navigation.md?id=getcontrollerfocusclass) returns the focus-ring class for controller input.

## React hooks and scale

| Hook | Purpose |
| --- | --- |
| [`useScale`](../api/sandkit.api.ui.md?id=usescale) | Current UI scale factor |
| [`useGameEvent`](../api/sandkit.api.ui.md?id=usegameevent) | Subscribe to `sandkit.api.events` in UI code |
| [`useRefresh`](../api/sandkit.api.ui.md?id=userefresh) | Re-render when listed components update |
| [`hotbar.useHotbar`](../api/sandkit.api.ui.hotbar.md?id=usehotbar) | Hotbar bank and slot state |

## Related

- [The mod lifecycle](guides/mod-lifecycle.md) — when `entry` runs
- [sandkit.api.ui](../api/sandkit.api.ui.md) — full namespace
- [sandkit.api.ui.regions](../api/sandkit.api.ui.regions.md) — region mounts
- [sandkit.api.ui.hotbar](../api/sandkit.api.ui.hotbar.md) — hotbar banks and slots
- [sandkit.api.ui.components](../api/sandkit.api.ui.components.md) — Panel, Button, ActionSlot
- [sandkit.api.ui.navigation](../api/sandkit.api.ui.navigation.md) — controller focus
- [sandkit.enums.ComponentId](../api/sandkit.enums.ComponentId.md) — HUD component ids
- [Official Sandkit API](https://sandustry.com/sandkit.html) — host docs
