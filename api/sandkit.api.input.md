# sandkit.api.input

`sandkit.api.input` — key bindings, mouse position, and modifier keys.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.input.InputBindingHandlers :id=inputbindinghandlers

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L117" target="_blank" rel="noopener">input.d.ts:117</a></p>

| Property | Type | Description |
| --- | --- | --- |
| down? | <code>() =&gt; void</code> | Called when the binding is pressed. |
| up? | <code>() =&gt; void</code> | Called when the binding is released. |

<div class="smt-member-anchors">

##### down? <!-- {docsify-ignore} -->

##### up? <!-- {docsify-ignore} -->

</div>

Handlers invoked when a binding is pressed or released.

</div>

<div class="smt-member-card">

### sandkit.api.input.InputBindingDefinition :id=inputbindingdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L125" target="_blank" rel="noopener">input.d.ts:125</a></p>

| Property | Type | Description |
| --- | --- | --- |
| displayName | <code>string</code> | Display name shown in settings. |
| displayNameKey? | <code>string</code> | i18n key for the display name (overrides displayName when set). |
| category | <code>string</code> | Settings category for grouping. |
| handlers | <code>InputBindingHandlers</code> | Press and release handlers. |

<div class="smt-member-anchors">

##### displayName <!-- {docsify-ignore} -->

##### displayNameKey? <!-- {docsify-ignore} -->

##### category <!-- {docsify-ignore} -->

##### handlers <!-- {docsify-ignore} -->

</div>

Definition for a registered input binding.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.input.BindingId :id=bindingid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L96" target="_blank" rel="noopener">input.d.ts:96</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.BindingId = LooseString&lt;` ${KeyBinding} `&gt;">

```ts
BindingId = LooseString<` ${KeyBinding} `>
```

</div>

Binding id. Vanilla [KeyBindingEnum](api/sandkit.enums.KeyBinding.md) names autocomplete; custom ids are allowed.

</div>

<div class="smt-member-card">

### sandkit.api.input.KeyCode :id=keycode

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L101" target="_blank" rel="noopener">input.d.ts:101</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.KeyCode = LooseString&lt;&quot;Shift&quot; | &quot;Alt&quot; | &quot;Control&quot; | &quot;Meta&quot; | &quot;ShiftLeft&quot; | &quot;ShiftRight&quot; | &quot;AltLeft&quot; | &quot;AltRight&quot; | &quot;ControlLeft&quot; | &quot;ControlRight&quot; | &quot;MetaLeft&quot; | &quot;MetaRight&quot;&gt;">

```ts
KeyCode = LooseString<"Shift" | "Alt" | "Control" | "Meta" | "ShiftLeft" | "ShiftRight" | "AltLeft" | "AltRight" | "ControlLeft" | "ControlRight" | "MetaLeft" | "MetaRight">
```

</div>

KeyboardEvent.code, a modifier alias (`Shift`), or a chord (`Control+KeyC`).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.input.registerBinding :id=registerbinding

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L31" target="_blank" rel="noopener">input.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId">

```ts
registerBinding(bindingId: BindingId, defaultKeys: KeyCode[], definition: InputBindingDefinition): BindingId
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`BindingId`](?id=bindingid)</code> | Unique id for the binding (also used in settings). |
| defaultKeys | <code>[`KeyCode`](?id=keycode)[]</code> | Default key codes (for example `"Control+KeyC"`). |
| definition | <code>[`InputBindingDefinition`](?id=inputbindingdefinition)</code> | Display metadata and press/release handlers. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

##### defaultKeys <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Register a key binding and return its binding id.

[`BindingId`](?id=bindingid) The registered binding id.

#### Example

```ts
api.input.registerBinding("ExampleToggle", ["KeyO"], {
  displayName: "Toggle example",
  displayNameKey: "mods|example|toggle",
  subsection: {
    title: "Example controls",
    titleKey: "mods|example|controlsTitle",
    description: "Bindings installed by the example mod.",
    descriptionKey: "mods|example|controlsDescription",
  },
  handlers: { down: toggleExample },
});
```

</div>

<div class="smt-member-card">

### sandkit.api.input.getMouseCellPosition :id=getmousecellposition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L41" target="_blank" rel="noopener">input.d.ts:41</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.getMouseCellPosition(): object">

```ts
getMouseCellPosition(): object
```

</div>

Return the mouse position in cell coordinates.

Cell `{ x, y }` under the cursor. x: number y: number

</div>

<div class="smt-member-card">

### sandkit.api.input.getBoundKeys :id=getboundkeys

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L50" target="_blank" rel="noopener">input.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.getBoundKeys(bindingId: BindingId): KeyCode[]">

```ts
getBoundKeys(bindingId: BindingId): KeyCode[]
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`BindingId`](?id=bindingid)</code> | Registered binding id. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

</div>

Return the keys currently bound to a binding id.

[`KeyCode`](?id=keycode)[] Key strings from settings (for example `"KeyA"` or `"Shift"`). Session `input.keys` is keyed by `KeyboardEvent.code`. Modifier aliases (`Shift`, `Alt`, `Control`, `Meta`) expand to `ShiftLeft` / `ShiftRight` and the same for the other modifiers.

</div>

<div class="smt-member-card">

### sandkit.api.input.getDisplayKey :id=getdisplaykey

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L58" target="_blank" rel="noopener">input.d.ts:58</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.getDisplayKey(bindingId: BindingId, defaultLabel?: string): string">

```ts
getDisplayKey(bindingId: BindingId, defaultLabel?: string): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`BindingId`](?id=bindingid)</code> | Registered binding id. |
| defaultLabel? | `string` | Fallback label when no key is bound. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

##### defaultLabel? <!-- {docsify-ignore} -->

</div>

Return a display label for the bound key.

Human-readable key label for UI.

</div>

<div class="smt-member-card">

### sandkit.api.input.triggerBinding :id=triggerbinding

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L64" target="_blank" rel="noopener">input.d.ts:64</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.triggerBinding(bindingId: BindingId): void">

```ts
triggerBinding(bindingId: BindingId): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`BindingId`](?id=bindingid)</code> | Registered binding id. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

</div>

Fire the binding down handler as if the key was pressed.

</div>

<div class="smt-member-card">

### sandkit.api.input.pressBinding :id=pressbinding

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L70" target="_blank" rel="noopener">input.d.ts:70</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.pressBinding(bindingId: BindingId): void">

```ts
pressBinding(bindingId: BindingId): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`BindingId`](?id=bindingid)</code> | Registered binding id. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

</div>

Fire the binding down handler without a matching release.

</div>

<div class="smt-member-card">

### sandkit.api.input.releaseBinding :id=releasebinding

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L76" target="_blank" rel="noopener">input.d.ts:76</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.releaseBinding(bindingId: BindingId): void">

```ts
releaseBinding(bindingId: BindingId): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| bindingId | <code>[`BindingId`](?id=bindingid)</code> | Registered binding id. |

<div class="smt-member-anchors">

##### bindingId <!-- {docsify-ignore} -->

</div>

Fire the binding up handler.

</div>

<div class="smt-member-card">

### sandkit.api.input.resetMouseState :id=resetmousestate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L79" target="_blank" rel="noopener">input.d.ts:79</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.resetMouseState(): void">

```ts
resetMouseState(): void
```

</div>

Clear internal mouse button state.

</div>

<div class="smt-member-card">

### sandkit.api.input.isCtrlHeld :id=isctrlheld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L85" target="_blank" rel="noopener">input.d.ts:85</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.isCtrlHeld(): boolean">

```ts
isCtrlHeld(): boolean
```

</div>

Return true when Ctrl is held.

True when the Ctrl modifier is down.

</div>

<div class="smt-member-card">

### sandkit.api.input.isAltHeld :id=isaltheld

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/input.d.ts#L91" target="_blank" rel="noopener">input.d.ts:91</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.input.isAltHeld(): boolean">

```ts
isAltHeld(): boolean
```

</div>

Return true when Alt is held.

True when the Alt modifier is down.

</div>
