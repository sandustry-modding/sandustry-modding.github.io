# sandkit.engine.api.auralite

**`Internal`**

`sandkit.engine.api.auralite` — auralite production tracking.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.auralite.ensureProducedAtLeast :id=ensureproducedatleast

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/auralite.d.ts#L15" target="_blank" rel="noopener">auralite.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.auralite.ensureProducedAtLeast(...args: unknown[]): unknown">

```ts
ensureProducedAtLeast(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Ensure at least the given amount of auralite has been produced.

</div>

<div class="smt-member-card">

### sandkit.engine.api.auralite.getProduced :id=getproduced

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/auralite.d.ts#L20" target="_blank" rel="noopener">auralite.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.auralite.getProduced(...args: unknown[]): unknown">

```ts
getProduced(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return total auralite produced so far.

</div>
