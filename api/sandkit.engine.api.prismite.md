# sandkit.engine.api.prismite

**`Internal`**

`sandkit.engine.api.prismite` — prismite resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.prismite.consume :id=consume

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L15" target="_blank" rel="noopener">prismite.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prismite.consume(...args: unknown[]): unknown">

```ts
consume(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Consume prismite from the player or world.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prismite.getAvailable :id=getavailable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L20" target="_blank" rel="noopener">prismite.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prismite.getAvailable(...args: unknown[]): unknown">

```ts
getAvailable(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return available prismite amount.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prismite.getConsumed :id=getconsumed

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismite.d.ts#L25" target="_blank" rel="noopener">prismite.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prismite.getConsumed(...args: unknown[]): unknown">

```ts
getConsumed(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return total prismite consumed so far.

</div>
