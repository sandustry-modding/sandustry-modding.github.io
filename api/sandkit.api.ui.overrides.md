# sandkit.api.ui.overrides

Wrap a built-in UI component.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.overrides.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/ui.d.ts#L224" target="_blank" rel="noopener">ui.d.ts:224</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.overrides.register(componentId: ComponentId, wrapper: (Original: ComponentType&lt;Record&lt;string, unknown&gt;&gt;, props: Record&lt;string, unknown&gt;) =&gt; ReactNode): OverrideHandle">

```ts
register(componentId: ComponentId, wrapper: (Original: ComponentType<Record<string, unknown>>, props: Record<string, unknown>) => ReactNode): OverrideHandle
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| componentId | <code>[`ComponentId`](api/sandkit.api.ui.md?id=componentid)</code> | Built-in component id (for example `"resources"`). |
| wrapper | <code>(`Original`: `ComponentType`&lt;`Record`&lt;`string`, `unknown`&gt;&gt;, `props`: `Record`&lt;`string`, `unknown`&gt;) =&gt; `ReactNode`</code> | Receives the original component and props; return replacement content. |

<div class="smt-member-anchors">

##### componentId <!-- {docsify-ignore} -->

##### wrapper <!-- {docsify-ignore} -->

</div>

Register a wrapper around a built-in UI component.

[`OverrideHandle`](api/sandkit.api.ui.md?id=overridehandle) Handle whose [OverrideHandle.remove](api/sandkit.api.ui.md?id=remove) drops the wrapper.

#### Example

```ts
const overrideHandle = api.ui.overrides.register(
  "resources",
  (Original) => sandkit.react.createElement(
    sandkit.react.Fragment,
    null,
    sandkit.react.createElement(Original),
    sandkit.react.createElement(ResourceAddon),
  ),
);
```

</div>
