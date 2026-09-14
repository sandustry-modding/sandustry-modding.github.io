# sandkit.api.ui.components

Built-in React UI components.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.components.ActionSlot :id=actionslot

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L308" target="_blank" rel="noopener">ui.d.ts:308</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.components.ActionSlot(props: ActionSlotProps): ReactNode">

```ts
ActionSlot(props: ActionSlotProps): ReactNode
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| props | <code>[`ActionSlotProps`](api/sandkit.api.ui.md?id=actionslotprops)</code> | Bank source, slot index, and optional labels and handlers. |

<div class="smt-member-anchors">

##### props <!-- {docsify-ignore} -->

</div>

React hotbar action slot.

#### Example

```ts
const slot = sandkit.react.createElement(
  api.ui.components.ActionSlot,
  { source, slotIndex: 0, keyLabel: "1" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.components.Panel :id=panel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L323" target="_blank" rel="noopener">ui.d.ts:323</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.components.Panel(props: PanelProps): ReactNode">

```ts
Panel(props: PanelProps): ReactNode
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| props | <code>[`PanelProps`](api/sandkit.api.ui.md?id=panelprops)</code> | Title, children, and optional class and style. |

<div class="smt-member-anchors">

##### props <!-- {docsify-ignore} -->

</div>

React panel with an optional title.

#### Example

```ts
const panel = sandkit.react.createElement(
  api.ui.components.Panel,
  { title: "Options" },
  "Panel content",
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.components.Button :id=button

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L338" target="_blank" rel="noopener">ui.d.ts:338</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.components.Button(props: ButtonProps): ReactNode">

```ts
Button(props: ButtonProps): ReactNode
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| props | <code>[`ButtonProps`](api/sandkit.api.ui.md?id=buttonprops)</code> | Children, click handler, and optional style flags. |

<div class="smt-member-anchors">

##### props <!-- {docsify-ignore} -->

</div>

React button.

#### Example

```ts
const button = sandkit.react.createElement(
  api.ui.components.Button,
  { onClick: openPanel },
  "Open",
);
```

</div>
