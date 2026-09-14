# sandkit.engine.api.debug

**`Internal`**

`sandkit.engine.api.debug` — debug overlay registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.debug.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/debug.d.ts#L15" target="_blank" rel="noopener">debug.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.debug.register(...args: unknown[]): unknown">

```ts
register(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register a debug overlay or helper.

</div>
