# sandkit.engine.api.factory

**`Internal`**

`sandkit.engine.api.factory` — factory tier progression and process tracking.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.factory.addViabilityGold :id=addviabilitygold

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L15" target="_blank" rel="noopener">factory.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.addViabilityGold(...args: unknown[]): unknown">

```ts
addViabilityGold(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Add viability gold toward the next factory tier.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.canUnlockNextTier :id=canunlocknexttier

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L20" target="_blank" rel="noopener">factory.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.canUnlockNextTier(...args: unknown[]): unknown">

```ts
canUnlockNextTier(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether the next factory tier can be unlocked.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.ensureProcessAtLeast :id=ensureprocessatleast

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L25" target="_blank" rel="noopener">factory.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.ensureProcessAtLeast(...args: unknown[]): unknown">

```ts
ensureProcessAtLeast(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Ensure at least the given process count has been recorded.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.flushDeferredLevelUps :id=flushdeferredlevelups

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L30" target="_blank" rel="noopener">factory.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.flushDeferredLevelUps(...args: unknown[]): unknown">

```ts
flushDeferredLevelUps(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Apply deferred factory level-ups.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.getLevel :id=getlevel

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L35" target="_blank" rel="noopener">factory.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.getLevel(...args: unknown[]): unknown">

```ts
getLevel(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current factory level.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.getProcessCount :id=getprocesscount

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L40" target="_blank" rel="noopener">factory.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.getProcessCount(...args: unknown[]): unknown">

```ts
getProcessCount(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return total recorded process count.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.getProcessRate :id=getprocessrate

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L45" target="_blank" rel="noopener">factory.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.getProcessRate(...args: unknown[]): unknown">

```ts
getProcessRate(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the current process rate.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.recordProcess :id=recordprocess

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L50" target="_blank" rel="noopener">factory.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.recordProcess(...args: unknown[]): unknown">

```ts
recordProcess(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Record one factory process event.

</div>

<div class="smt-member-card">

### sandkit.engine.api.factory.unlockNextTier :id=unlocknexttier

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/factory.d.ts#L55" target="_blank" rel="noopener">factory.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.factory.unlockNextTier(...args: unknown[]): unknown">

```ts
unlockNextTier(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Unlock the next factory tier.

</div>
