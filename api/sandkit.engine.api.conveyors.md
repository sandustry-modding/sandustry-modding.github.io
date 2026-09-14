# sandkit.engine.api.conveyors

**`Internal`**

`sandkit.engine.api.conveyors` — conveyor type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.conveyors.registerType :id=registertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/conveyors.d.ts#L15" target="_blank" rel="noopener">conveyors.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.conveyors.registerType(...args: unknown[]): unknown">

```ts
registerType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register a custom conveyor type.

</div>
