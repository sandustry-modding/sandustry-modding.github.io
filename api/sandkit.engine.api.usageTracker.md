# sandkit.engine.api.usageTracker

**`Internal`**

`sandkit.engine.api.usageTracker` — tool and structure usage statistics.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.usageTracker.clear :id=clear

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L15" target="_blank" rel="noopener">usageTracker.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.usageTracker.clear(...args: unknown[]): unknown">

```ts
clear(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Clear recorded usage statistics.

</div>

<div class="smt-member-card">

### sandkit.engine.api.usageTracker.getLatest :id=getlatest

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L20" target="_blank" rel="noopener">usageTracker.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.usageTracker.getLatest(...args: unknown[]): unknown">

```ts
getLatest(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the most recently used item or structure.

</div>

<div class="smt-member-card">

### sandkit.engine.api.usageTracker.getMostUsed :id=getmostused

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/usageTracker.d.ts#L25" target="_blank" rel="noopener">usageTracker.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.usageTracker.getMostUsed(...args: unknown[]): unknown">

```ts
getMostUsed(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the most frequently used item or structure.

</div>
