# sandkit.engine.api.shadows

**`Internal`**

`sandkit.engine.api.shadows` — shadow map refresh for regions.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.shadows.refresh :id=refresh

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L15" target="_blank" rel="noopener">shadows.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.shadows.refresh(...args: unknown[]): unknown">

```ts
refresh(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh shadows for the whole visible area.

</div>

<div class="smt-member-card">

### sandkit.engine.api.shadows.refreshRadius :id=refreshradius

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L20" target="_blank" rel="noopener">shadows.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.shadows.refreshRadius(...args: unknown[]): unknown">

```ts
refreshRadius(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh shadows within a circular radius.

</div>

<div class="smt-member-card">

### sandkit.engine.api.shadows.refreshRect :id=refreshrect

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/shadows.d.ts#L25" target="_blank" rel="noopener">shadows.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.shadows.refreshRect(...args: unknown[]): unknown">

```ts
refreshRect(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Refresh shadows within a rectangle.

</div>
