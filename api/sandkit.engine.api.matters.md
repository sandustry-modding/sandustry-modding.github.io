# sandkit.engine.api.matters

**`Internal`**

`sandkit.engine.api.matters` — matter type registration and solid updates.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.matters.getMatterTypeFromId :id=getmattertypefromid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/matters.d.ts#L15" target="_blank" rel="noopener">matters.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.matters.getMatterTypeFromId(...args: unknown[]): unknown">

```ts
getMatterTypeFromId(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Resolve a matter type from an id string.

</div>

<div class="smt-member-card">

### sandkit.engine.api.matters.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/matters.d.ts#L20" target="_blank" rel="noopener">matters.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.matters.register(...args: unknown[]): unknown">

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

Register a custom matter type.

</div>

<div class="smt-member-card">

### sandkit.engine.api.matters.runSolidUpdate :id=runsolidupdate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/matters.d.ts#L25" target="_blank" rel="noopener">matters.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.matters.runSolidUpdate(...args: unknown[]): unknown">

```ts
runSolidUpdate(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Run one solid-matter update step.

</div>
