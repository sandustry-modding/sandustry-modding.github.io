# sandkit.api.ui

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.SelectChoice :id=selectchoice

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L440" target="_blank" rel="noopener">ui.d.ts:440</a></p>

| Property | Type | Description |
| --- | --- | --- |
| label | <code>LocalizedText</code> | Display label for the choice. |
| value | <code>T</code> | Value returned when the player picks this choice. |

<div class="smt-member-anchors">

##### label <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

</div>

One choice in [select](?id=select).

`T` = `string`

</div>

<div class="smt-member-card">

### sandkit.api.ui.SelectDialogOptions :id=selectdialogoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L448" target="_blank" rel="noopener">ui.d.ts:448</a></p>

| Property | Type | Description |
| --- | --- | --- |
| message? | <code>LocalizedText</code> | Optional dialog body text. |
| title? | <code>LocalizedText</code> | Optional dialog title. |
| defaultValue? | <code>T</code> | Value selected when the dialog opens. |
| buttonLabel? | <code>LocalizedText</code> | Confirm button label. |

<div class="smt-member-anchors">

##### message? <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

##### defaultValue? <!-- {docsify-ignore} -->

##### buttonLabel? <!-- {docsify-ignore} -->

</div>

Dialog options for [select](?id=select).

`T` = `string`

</div>

<div class="smt-member-card">

### sandkit.api.ui.RegionMountOptions :id=regionmountoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L460" target="_blank" rel="noopener">ui.d.ts:460</a></p>

| Property | Type | Description |
| --- | --- | --- |
| placement? | <code>&quot;raised&quot; &#124; &quot;docked&quot;</code> | `"docked"` sits on the hotbar. `"raised"` sits above panels such as Filter Config. |
| order? | <code>number</code> | Draw order within the region. |
| render | <code>() =&gt; ReactNode</code> | Function that returns React content. |

<div class="smt-member-anchors">

##### placement? <!-- {docsify-ignore} -->

##### order? <!-- {docsify-ignore} -->

##### render <!-- {docsify-ignore} -->

</div>

Options for [regions.mount](api/sandkit.api.ui.regions.md?id=mount).

</div>

<div class="smt-member-card">

### sandkit.api.ui.RegionMountUpdateOptions :id=regionmountupdateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L473" target="_blank" rel="noopener">ui.d.ts:473</a></p>

| Property | Type | Description |
| --- | --- | --- |
| placement? | <code>&quot;raised&quot; &#124; &quot;docked&quot;</code> | `"docked"` sits on the hotbar. `"raised"` sits above panels such as Filter Config. |
| order? | <code>number</code> | Draw order within the region. |
| render? | <code>() =&gt; ReactNode</code> | Function that returns React content. |

<div class="smt-member-anchors">

##### placement? <!-- {docsify-ignore} -->

##### order? <!-- {docsify-ignore} -->

##### render? <!-- {docsify-ignore} -->

</div>

Partial options for [RegionMountHandle](?id=regionmounthandle).

</div>

<div class="smt-member-card">

### sandkit.api.ui.RegionMountHandle :id=regionmounthandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L486" target="_blank" rel="noopener">ui.d.ts:486</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| update() | <code>(options: RegionMountUpdateOptions): void</code> | Update placement, order, or render for this mount. |
| unmount() | <code>(): void</code> | Remove this mount from the region. |

<div class="smt-member-anchors">

##### update() <!-- {docsify-ignore} -->

##### unmount() <!-- {docsify-ignore} -->

</div>

Handle returned from [regions.mount](api/sandkit.api.ui.regions.md?id=mount).

</div>

<div class="smt-member-card">

### sandkit.api.ui.VisibilityHandle :id=visibilityhandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L505" target="_blank" rel="noopener">ui.d.ts:505</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| restore() | <code>(): void</code> | Show the region again. |

<div class="smt-member-anchors">

##### restore() <!-- {docsify-ignore} -->

</div>

Handle returned from [regions.setVisible](api/sandkit.api.ui.regions.md?id=setvisible).

</div>

<div class="smt-member-card">

### sandkit.api.ui.OverrideHandle :id=overridehandle

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L511" target="_blank" rel="noopener">ui.d.ts:511</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| remove() | <code>(): void</code> | Drop this wrapper. |

<div class="smt-member-anchors">

##### remove() <!-- {docsify-ignore} -->

</div>

Handle returned from [overrides.register](api/sandkit.api.ui.overrides.md?id=register).

</div>

<div class="smt-member-card">

### sandkit.api.ui.HotbarBankSourceOptions :id=hotbarbanksourceoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L517" target="_blank" rel="noopener">ui.d.ts:517</a></p>

| Property | Type | Description |
| --- | --- | --- |
| bankOffset | <code>number</code> | Bank index offset for this source. |
| minimumBankCount? | <code>number</code> | Minimum number of banks to keep available. |

<div class="smt-member-anchors">

##### bankOffset <!-- {docsify-ignore} -->

##### minimumBankCount? <!-- {docsify-ignore} -->

</div>

Options for [hotbar.createBankSource](api/sandkit.api.ui.hotbar.md?id=createbanksource).

</div>

<div class="smt-member-card">

### sandkit.api.ui.HotbarBankSource :id=hotbarbanksource

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L525" target="_blank" rel="noopener">ui.d.ts:525</a></p>

| Method | Signature | Description |
| --- | --- | --- |
| isAvailable() | <code>(): boolean</code> | Return true when this bank source can show slots. |
| getBankIndex() | <code>(): number</code> | Return the bank index for this source. |
| getSlotCount() | <code>(): number</code> | Return the number of slots in this bank. |
| getAction() | <code>(slotIndex: number): AssetRef</code> | Return the action in a slot. |
| activateSlot() | <code>(slotIndex: number): void</code> | Activate a slot in this bank. |
| clearSlot() | <code>(slotIndex: number): void</code> | Clear a slot in this bank. |
| dispose() | <code>(): void</code> | Release this bank source. |

<div class="smt-member-anchors">

##### isAvailable() <!-- {docsify-ignore} -->

##### getBankIndex() <!-- {docsify-ignore} -->

##### getSlotCount() <!-- {docsify-ignore} -->

##### getAction() <!-- {docsify-ignore} -->

##### activateSlot() <!-- {docsify-ignore} -->

##### clearSlot() <!-- {docsify-ignore} -->

##### dispose() <!-- {docsify-ignore} -->

</div>

Hotbar bank source used by [components.ActionSlot](api/sandkit.api.ui.components.md?id=actionslot).

</div>

<div class="smt-member-card">

### sandkit.api.ui.HotbarState :id=hotbarstate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L552" target="_blank" rel="noopener">ui.d.ts:552</a></p>

| Property | Type | Description |
| --- | --- | --- |
| bankCount | <code>number</code> | Number of hotbar banks. |
| activeBankIndex | <code>number</code> | Active bank index. |
| activeSlotIndex | <code>number</code> | Active slot index. |

<div class="smt-member-anchors">

##### bankCount <!-- {docsify-ignore} -->

##### activeBankIndex <!-- {docsify-ignore} -->

##### activeSlotIndex <!-- {docsify-ignore} -->

</div>

State returned from [hotbar.useHotbar](api/sandkit.api.ui.hotbar.md?id=usehotbar).

</div>

<div class="smt-member-card">

### sandkit.api.ui.ActionSlotProps :id=actionslotprops

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L562" target="_blank" rel="noopener">ui.d.ts:562</a></p>

| Property | Type | Description |
| --- | --- | --- |
| source | <code>HotbarBankSource</code> | Bank source from [hotbar.createBankSource](api/sandkit.api.ui.hotbar.md?id=createbanksource). |
| slotIndex | <code>number</code> | Slot index in the bank. |
| action? | <code>AssetRef</code> | Action shown in the slot. |
| keyLabel? | <code>string</code> | Optional key label drawn on the slot. |
| active? | <code>boolean</code> | When true, draw the slot as selected. |
| onSelect? | <code>() =&gt; void</code> | Called when the player selects the slot. |
| onClear? | <code>() =&gt; void</code> | Called when the player clears the slot. |

<div class="smt-member-anchors">

##### source <!-- {docsify-ignore} -->

##### slotIndex <!-- {docsify-ignore} -->

##### action? <!-- {docsify-ignore} -->

##### keyLabel? <!-- {docsify-ignore} -->

##### active? <!-- {docsify-ignore} -->

##### onSelect? <!-- {docsify-ignore} -->

##### onClear? <!-- {docsify-ignore} -->

</div>

Props for [components.ActionSlot](api/sandkit.api.ui.components.md?id=actionslot).

</div>

<div class="smt-member-card">

### sandkit.api.ui.PanelProps :id=panelprops

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L580" target="_blank" rel="noopener">ui.d.ts:580</a></p>

| Property | Type | Description |
| --- | --- | --- |
| title? | <code>LocalizedText</code> | Optional panel title. |
| children? | <code>ReactNode</code> | Panel body. |
| className? | <code>string</code> | Extra class names. |
| style? | <code>CSSProperties</code> | Inline style. |

<div class="smt-member-anchors">

##### title? <!-- {docsify-ignore} -->

##### children? <!-- {docsify-ignore} -->

##### className? <!-- {docsify-ignore} -->

##### style? <!-- {docsify-ignore} -->

</div>

Props for [components.Panel](api/sandkit.api.ui.components.md?id=panel).

</div>

<div class="smt-member-card">

### sandkit.api.ui.ButtonProps :id=buttonprops

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L592" target="_blank" rel="noopener">ui.d.ts:592</a></p>

| Property | Type | Description |
| --- | --- | --- |
| children? | <code>ReactNode</code> | Button label or content. |
| active? | <code>boolean</code> | When true, draw the button as selected. |
| border? | <code>boolean</code> | When false, hide the button border. |
| disabled? | <code>boolean</code> | When true, ignore clicks. |
| small? | <code>boolean</code> | When true, use the small button size. |
| variant? | <code>&quot;danger&quot; &#124; &quot;primary&quot;</code> | Visual style. |
| className? | <code>string</code> | Extra class names. |
| style? | <code>CSSProperties</code> | Inline style. |
| onClick? | <code>() =&gt; void</code> | Click handler. |

<div class="smt-member-anchors">

##### children? <!-- {docsify-ignore} -->

##### active? <!-- {docsify-ignore} -->

##### border? <!-- {docsify-ignore} -->

##### disabled? <!-- {docsify-ignore} -->

##### small? <!-- {docsify-ignore} -->

##### variant? <!-- {docsify-ignore} -->

##### className? <!-- {docsify-ignore} -->

##### style? <!-- {docsify-ignore} -->

##### onClick? <!-- {docsify-ignore} -->

</div>

Props for [components.Button](api/sandkit.api.ui.components.md?id=button).

</div>

<div class="smt-member-card">

### sandkit.api.ui.TooltipMessageData :id=tooltipmessagedata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L614" target="_blank" rel="noopener">ui.d.ts:614</a></p>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>&quot;message&quot;</code> | Discriminator for tooltip renderer selection. |
| text | <code>LocalizedText</code> | Message body as localized text. |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### text <!-- {docsify-ignore} -->

</div>

Message tooltip with localized body text.

</div>

<div class="smt-member-card">

### sandkit.api.ui.Focusable :id=focusable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L622" target="_blank" rel="noopener">ui.d.ts:622</a></p>

| Property | Type | Description |
| --- | --- | --- |
| ref | <code>RefObject&lt;T&gt;</code> | Ref to attach to the focusable element. |
| focused | <code>boolean</code> | True when the element has controller focus. |
| focus | <code>() =&gt; void</code> | Move controller focus to this element. |

<div class="smt-member-anchors">

##### ref <!-- {docsify-ignore} -->

##### focused <!-- {docsify-ignore} -->

##### focus <!-- {docsify-ignore} -->

</div>

Focusable element state from useFocusable.

`T` *extends* `HTMLElement` = `HTMLDivElement`

</div>

<div class="smt-member-card">

### sandkit.api.ui.FocusOptions :id=focusoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L632" target="_blank" rel="noopener">ui.d.ts:632</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique id within the focus scope. |
| scope | <code>string</code> | Focus scope id this element belongs to. |
| onActivate | <code>(element?: HTMLElement) =&gt; void</code> | Called when the element is activated (A button / Enter). |
| onFocus? | <code>optional onFocus?: () =&gt; void</code> | Called when the element receives focus. |
| disabled? | <code>optional disabled?: boolean</code> | When true, skip this element during navigation. |
| x? | <code>optional x?: number</code> | Optional grid column for spatial navigation. |
| y? | <code>optional y?: number</code> | Optional grid row for spatial navigation. |
| neighbors? | <code>optional neighbors?: Partial&lt;Record&lt;&quot;left&quot; &#124; &quot;right&quot; &#124; &quot;up&quot; &#124; &quot;down&quot;, string&gt;&gt;</code> | Neighbor ids for directional navigation. |
| scrollIntoView? | <code>optional scrollIntoView?: boolean</code> | When true, scroll the element into view on focus. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### scope <!-- {docsify-ignore} -->

##### onActivate <!-- {docsify-ignore} -->

##### onFocus? <!-- {docsify-ignore} -->

##### disabled? <!-- {docsify-ignore} -->

##### x? <!-- {docsify-ignore} -->

##### y? <!-- {docsify-ignore} -->

##### neighbors? <!-- {docsify-ignore} -->

##### scrollIntoView? <!-- {docsify-ignore} -->

</div>

Options for useFocusable registration.

</div>

<div class="smt-member-card">

### sandkit.api.ui.FocusScopeOptions :id=focusscopeoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L654" target="_blank" rel="noopener">ui.d.ts:654</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Unique scope id. |
| active | <code>boolean</code> | When true, this scope can receive focus. |
| priority? | <code>optional priority?: number</code> | Higher values take focus before lower values. |
| defaultId? | <code>optional defaultId?: string</code> | Default focusable id in this scope. |
| onBack? | <code>optional onBack?: () =&gt; boolean &#124; void</code> | Called on back. Return true when the scope handled back. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

##### active <!-- {docsify-ignore} -->

##### priority? <!-- {docsify-ignore} -->

##### defaultId? <!-- {docsify-ignore} -->

##### onBack? <!-- {docsify-ignore} -->

</div>

Options for [navigation.useFocusScope](api/sandkit.api.ui.navigation.md?id=usefocusscope).

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.OverlaySlot :id=overlayslot

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L425" target="_blank" rel="noopener">ui.d.ts:425</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.OverlaySlot = LooseString&lt;&quot;hotbar&quot; | &quot;global&quot;&gt;">

```ts
OverlaySlot = LooseString<"hotbar" | "global">
```

</div>

Overlay slot name. Known vanilla slots autocomplete; any string is allowed.

</div>

<div class="smt-member-card">

### sandkit.api.ui.ComponentId :id=componentid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L431" target="_blank" rel="noopener">ui.d.ts:431</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.ComponentId = ComponentId | LooseString&lt;never&gt;">

```ts
ComponentId = ComponentId | LooseString<never>
```

</div>

Registered UI component id.
Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) values autocomplete; custom string ids are allowed.

</div>

<div class="smt-member-card">

### sandkit.api.ui.ComponentUpdateOptions :id=componentupdateoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L434" target="_blank" rel="noopener">ui.d.ts:434</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.ComponentUpdateOptions = Record&lt;string, unknown&gt;">

```ts
ComponentUpdateOptions = Record<string, unknown>
```

</div>

Component-specific update payload passed to [update](?id=update).

</div>

<div class="smt-member-card">

### sandkit.api.ui.TooltipData :id=tooltipdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L437" target="_blank" rel="noopener">ui.d.ts:437</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.TooltipData = TooltipMessageData">

```ts
TooltipData = TooltipMessageData
```

</div>

Tooltip payload shown near the cursor or UI target.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.update :id=update

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L35" target="_blank" rel="noopener">ui.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.update(componentId: ComponentId, options?: ComponentUpdateOptions): void">

```ts
update(componentId: ComponentId, options?: ComponentUpdateOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| componentId | <code>[`ComponentId`](?id=componentid)</code> | Built-in [ComponentIdEnum](api/sandkit.enums.ComponentId.md) value or custom string id. |
| options? | <code>[`ComponentUpdateOptions`](?id=componentupdateoptions)</code> | Component-specific update payload. |

<div class="smt-member-anchors">

##### componentId <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Update a registered UI component by id.

</div>

<div class="smt-member-card">

### sandkit.api.ui.openPauseMenu :id=openpausemenu

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L38" target="_blank" rel="noopener">ui.d.ts:38</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.openPauseMenu(): void">

```ts
openPauseMenu(): void
```

</div>

Open the pause menu.

</div>

<div class="smt-member-card">

### sandkit.api.ui.showTooltip :id=showtooltip

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L44" target="_blank" rel="noopener">ui.d.ts:44</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.showTooltip(data: TooltipMessageData): void">

```ts
showTooltip(data: TooltipMessageData): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| data | <code>[`TooltipMessageData`](?id=tooltipmessagedata)</code> | Tooltip type and localized content. |

<div class="smt-member-anchors">

##### data <!-- {docsify-ignore} -->

</div>

Show a tooltip with the given data.

</div>

<div class="smt-member-card">

### sandkit.api.ui.alert :id=alert

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L60" target="_blank" rel="noopener">ui.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.alert(message: LocalizedText, title?: LocalizedText): Promise&lt;void&gt;">

```ts
alert(message: LocalizedText, title?: LocalizedText): Promise<void>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Dialog body text. |
| title? | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Optional dialog title. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

</div>

Show an alert dialog.

`Promise`&lt;`void`&gt; Promise that resolves when the user dismisses the dialog.

#### Example

```ts
await api.ui.alert(
  { key: "mods|example|details" },
  { key: "mods|example|title" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.confirm :id=confirm

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L75" target="_blank" rel="noopener">ui.d.ts:75</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.confirm(message: LocalizedText, title?: LocalizedText): Promise&lt;boolean&gt;">

```ts
confirm(message: LocalizedText, title?: LocalizedText): Promise<boolean>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Dialog body text. |
| title? | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Optional dialog title. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

</div>

Show a confirm dialog.

`Promise`&lt;`boolean`&gt; Promise that resolves with true when confirmed, or false when cancelled.

#### Example

```ts
const confirmed = await api.ui.confirm(
  { key: "mods|example|confirm" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.prompt :id=prompt

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L94" target="_blank" rel="noopener">ui.d.ts:94</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise&lt;string | null&gt;">

```ts
prompt(message: LocalizedText, defaultValue?: string, placeholder?: LocalizedText, title?: LocalizedText, allowCopy?: boolean): Promise<string | null>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Dialog body text. |
| defaultValue? | `string` | Initial input value. |
| placeholder? | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Placeholder text in the input field. |
| title? | <code>[`LocalizedText`](api/sandkit.api.ui.worker.md?id=localizedtext)</code> | Optional dialog title. |
| allowCopy? | `boolean` | When true, allow copying the result from the dialog. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### defaultValue? <!-- {docsify-ignore} -->

##### placeholder? <!-- {docsify-ignore} -->

##### title? <!-- {docsify-ignore} -->

##### allowCopy? <!-- {docsify-ignore} -->

</div>

Show a prompt dialog.

`Promise`&lt;`string` &#124; `null`&gt; Promise that resolves with entered text, or null when cancelled.

#### Example

```ts
const value = await api.ui.prompt(
  { key: "mods|example|enterValue" },
  "",
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.select :id=select

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L119" target="_blank" rel="noopener">ui.d.ts:119</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.select&lt;T = string&gt;(options: readonly SelectChoice&lt;T&gt;[], opts?: SelectDialogOptions&lt;T&gt;): Promise&lt;T | null&gt;">

```ts
sandkit.api.ui.select<T = string>(options: readonly SelectChoice<T>[], opts?: SelectDialogOptions<T>): Promise<T | null>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| options | <code>[`SelectChoice`](?id=selectchoice)&lt;`T`&gt;[]</code> | Choices shown in the picker. |
| opts? | <code>[`SelectDialogOptions`](?id=selectdialogoptions)&lt;`T`&gt;</code> | Dialog title, default, and confirm label. |

<div class="smt-member-anchors">

##### options <!-- {docsify-ignore} -->

##### opts? <!-- {docsify-ignore} -->

</div>

Show a modal choice picker.

`T` = `string`

`Promise`&lt;`T` &#124; `null`&gt; Promise that resolves with the chosen value, or null when cancelled.

#### Example

```ts
const selected = await api.ui.select(
  [
    { label: "Sand", value: "sand" },
    { label: "Fluxite", value: "fluxite" },
  ],
  { title: "Select element", defaultValue: "sand", buttonLabel: "Choose" },
);
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.useRefresh :id=userefresh

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L128" target="_blank" rel="noopener">ui.d.ts:128</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.useRefresh(componentIds: readonly ComponentId[]): void">

```ts
useRefresh(componentIds: readonly ComponentId[]): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| componentIds | <code>[`ComponentId`](?id=componentid)[]</code> | Component ids to subscribe to. |

<div class="smt-member-anchors">

##### componentIds <!-- {docsify-ignore} -->

</div>

React hook that re-renders when the listed UI components update.

</div>

<div class="smt-member-card">

### sandkit.api.ui.useScale :id=usescale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L134" target="_blank" rel="noopener">ui.d.ts:134</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.useScale(): number">

```ts
useScale(): number
```

</div>

React hook that returns the current UI scale.

UI scale factor.

</div>

<div class="smt-member-card">

### sandkit.api.ui.useGameEvent :id=usegameevent

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L148" target="_blank" rel="noopener">ui.d.ts:148</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.useGameEvent&lt;K *extends* EventId&gt;(eventId: K, handler: (payload: EventPayload&lt;K&gt;) =&gt; void): void">

```ts
sandkit.api.ui.useGameEvent<K *extends* EventId>(eventId: K, handler: (payload: EventPayload<K>) => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Registered event name. |
| handler | <code>(`payload`: [`EventPayload`](api/sandkit.api.events.md?id=eventpayload)&lt;`K`&gt;) =&gt; `void`</code> | Called with the event payload. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### handler <!-- {docsify-ignore} -->

</div>

React hook that subscribes to a game event.

`K` *extends* [`EventId`](api/sandkit.api.events.md?id=eventid)

#### Example

```ts
api.ui.useGameEvent("resource:collected", (payload) => {
  console.log(payload.resourceId, payload.amount);
});
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.inject :id=inject

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L159" target="_blank" rel="noopener">ui.d.ts:159</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.inject(componentId: ComponentId, component: ComponentType&lt;Record&lt;string, never&gt;&gt;): () =&gt; void">

```ts
inject(componentId: ComponentId, component: ComponentType<Record<string, never>>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| componentId | <code>[`ComponentId`](?id=componentid)</code> | Overlay slot or custom mount point id. |
| component | `ComponentType`<`Record`<`string`, `never`>> | React component to render. |

<div class="smt-member-anchors">

##### componentId <!-- {docsify-ignore} -->

##### component <!-- {docsify-ignore} -->

</div>

Mount a React component by id.

Function that unmounts the injected component. () => `void`

</div>
