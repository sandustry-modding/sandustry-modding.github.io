# sandkit.engine.api.prismaline

**`Internal`**

`sandkit.engine.api.prismaline` — prismaline resource consume and availability.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.prismaline.consume :id=consume

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L15" target="_blank" rel="noopener">prismaline.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prismaline.consume(...args: unknown[]): unknown">

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

Consume prismaline from the player or world.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prismaline.getAvailable :id=getavailable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L20" target="_blank" rel="noopener">prismaline.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prismaline.getAvailable(...args: unknown[]): unknown">

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

Return available prismaline amount.

</div>

<div class="smt-member-card">

### sandkit.engine.api.prismaline.getConsumed :id=getconsumed

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/prismaline.d.ts#L25" target="_blank" rel="noopener">prismaline.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.prismaline.getConsumed(...args: unknown[]): unknown">

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

Return total prismaline consumed so far.

</div>
