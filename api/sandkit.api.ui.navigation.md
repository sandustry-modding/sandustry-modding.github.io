# sandkit.api.ui.navigation

Controller focus and scope navigation hooks.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.navigation.useFocusable :id=usefocusable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L387" target="_blank" rel="noopener">ui.d.ts:387</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.navigation.useFocusable&lt;T *extends* HTMLElement = HTMLDivElement&gt;(options: FocusOptions): Focusable&lt;T&gt;">

```ts
sandkit.api.ui.navigation.useFocusable<T *extends* HTMLElement = HTMLDivElement>(options: FocusOptions): Focusable<T>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| options | <code>[`FocusOptions`](api/sandkit.api.ui.md?id=focusoptions)</code> | Focus registration and neighbor wiring. |

<div class="smt-member-anchors">

##### options <!-- {docsify-ignore} -->

</div>

React hook for a focusable UI element in a scope.

`T` *extends* `HTMLElement` = `HTMLDivElement`

[`Focusable`](api/sandkit.api.ui.md?id=focusable)&lt;`T`&gt; Ref, focus state, and a focus helper.

#### Example

```ts
const focusable = api.ui.navigation.useFocusable({
  id: "example-button",
  scope: "example-scope",
  onActivate: openExample,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.navigation.useFocusScope :id=usefocusscope

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L404" target="_blank" rel="noopener">ui.d.ts:404</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.navigation.useFocusScope(options: FocusScopeOptions): void">

```ts
useFocusScope(options: FocusScopeOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| options | <code>[`FocusScopeOptions`](api/sandkit.api.ui.md?id=focusscopeoptions)</code> | Scope id, priority, default focus, and back handler. |

<div class="smt-member-anchors">

##### options <!-- {docsify-ignore} -->

</div>

React hook to register a focus scope with back handling.

#### Example

```ts
api.ui.navigation.useFocusScope({
  id: "example-scope",
  active: true,
  priority: 10,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.ui.navigation.getControllerFocusClass :id=getcontrollerfocusclass

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L411" target="_blank" rel="noopener">ui.d.ts:411</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.navigation.getControllerFocusClass(focused: boolean): string">

```ts
getControllerFocusClass(focused: boolean): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| focused | `boolean` | True when the element has controller focus. |

<div class="smt-member-anchors">

##### focused <!-- {docsify-ignore} -->

</div>

Return CSS class for controller focus ring state.

Class name string for the focus ring.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.ui.navigation.controllerFocusClass~~ :id=controllerfocusclass

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L419" target="_blank" rel="noopener">ui.d.ts:419</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [getControllerFocusClass](api/sandkit.api.ui.navigation.md?id=getcontrollerfocusclass) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.ui.navigation.controllerFocusClass(focused: boolean): string">

```ts
controllerFocusClass(focused: boolean): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| focused | `boolean` | True when the element has controller focus. |

<div class="smt-member-anchors">

##### focused <!-- {docsify-ignore} -->

</div>

Return CSS class for controller focus ring state.

Class name string for the focus ring.

</div>
