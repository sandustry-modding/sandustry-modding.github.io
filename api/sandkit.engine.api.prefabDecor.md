# sandkit.engine.api.prefabDecor

**`Internal`**

`sandkit.engine.api.prefabDecor` — prefab decorative placement.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.prefabDecor.getPlacementByName :id=getplacementbyname

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabDecor.d.ts#L15" target="_blank" rel="noopener">prefabDecor.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabDecor.getPlacementByName(...args: unknown[]): unknown">

```ts
getPlacementByName(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return a decor placement definition by name.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prefabDecor.replaceDecor :id=replacedecor

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prefabDecor.d.ts#L20" target="_blank" rel="noopener">prefabDecor.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prefabDecor.replaceDecor(...args: unknown[]): unknown">

```ts
replaceDecor(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Replace decor instances in a region or prefab.

</div>
