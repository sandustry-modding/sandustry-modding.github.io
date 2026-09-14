# sandkit.engine.api.foliage

**`Internal`**

`sandkit.engine.api.foliage` — procedural foliage generation and clusters.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.foliage.generate :id=generate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L15" target="_blank" rel="noopener">foliage.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.foliage.generate(...args: unknown[]): unknown">

```ts
generate(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Generate foliage for a region or world chunk.

</div>

<div class="smt-member-card">

### sandkit.engine.api.foliage.getClusters :id=getclusters

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L20" target="_blank" rel="noopener">foliage.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.foliage.getClusters(...args: unknown[]): unknown">

```ts
getClusters(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return foliage cluster data.

</div>

<div class="smt-member-card">

### sandkit.engine.api.foliage.getContainer :id=getcontainer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L25" target="_blank" rel="noopener">foliage.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.foliage.getContainer(...args: unknown[]): unknown">

```ts
getContainer(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the foliage render container.

</div>

<div class="smt-member-card">

### sandkit.engine.api.foliage.hasProcgenData :id=hasprocgendata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/foliage.d.ts#L30" target="_blank" rel="noopener">foliage.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.foliage.hasProcgenData(...args: unknown[]): unknown">

```ts
hasProcgenData(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether procgen foliage data exists for a location.

</div>
