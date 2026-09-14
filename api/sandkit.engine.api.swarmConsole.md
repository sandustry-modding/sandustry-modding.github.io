# sandkit.engine.api.swarmConsole

**`Internal`**

`sandkit.engine.api.swarmConsole` — swarm convergence console state.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.decrementConvergenceBuffer :id=decrementconvergencebuffer

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L15" target="_blank" rel="noopener">swarmConsole.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.decrementConvergenceBuffer(...args: unknown[]): unknown">

```ts
decrementConvergenceBuffer(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Decrease the convergence buffer by one step.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getCrystalMined :id=getcrystalmined

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L20" target="_blank" rel="noopener">swarmConsole.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getCrystalMined(...args: unknown[]): unknown">

```ts
getCrystalMined(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return total crystal mined for swarm consoles.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getDiskRadiusCells :id=getdiskradiuscells

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L25" target="_blank" rel="noopener">swarmConsole.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getDiskRadiusCells(...args: unknown[]): unknown">

```ts
getDiskRadiusCells(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the disk radius in cells for a console.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getEntityType :id=getentitytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L30" target="_blank" rel="noopener">swarmConsole.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getEntityType(...args: unknown[]): unknown">

```ts
getEntityType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the entity type used by swarm consoles.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getNearestConvergence :id=getnearestconvergence

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L35" target="_blank" rel="noopener">swarmConsole.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getNearestConvergence(...args: unknown[]): unknown">

```ts
getNearestConvergence(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the nearest convergence point.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getPendingConvergence :id=getpendingconvergence

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L40" target="_blank" rel="noopener">swarmConsole.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getPendingConvergence(...args: unknown[]): unknown">

```ts
getPendingConvergence(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the pending convergence target.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getPlacedConsoles :id=getplacedconsoles

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L45" target="_blank" rel="noopener">swarmConsole.d.ts:45</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getPlacedConsoles(...args: unknown[]): unknown">

```ts
getPlacedConsoles(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all placed swarm console structures.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.getRadiusPx :id=getradiuspx

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L50" target="_blank" rel="noopener">swarmConsole.d.ts:50</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.getRadiusPx(...args: unknown[]): unknown">

```ts
getRadiusPx(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the console effect radius in pixels.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.isSpawnJammed :id=isspawnjammed

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L55" target="_blank" rel="noopener">swarmConsole.d.ts:55</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.isSpawnJammed(...args: unknown[]): unknown">

```ts
isSpawnJammed(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return whether swarm spawn is currently jammed.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.registerEntityType :id=registerentitytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L60" target="_blank" rel="noopener">swarmConsole.d.ts:60</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.registerEntityType(...args: unknown[]): unknown">

```ts
registerEntityType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register the entity type for swarm consoles.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers :id=resetallconvergencebuffers

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L65" target="_blank" rel="noopener">swarmConsole.d.ts:65</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.resetAllConvergenceBuffers(...args: unknown[]): unknown">

```ts
resetAllConvergenceBuffers(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Reset convergence buffers on all consoles.

</div>

<div class="smt-member-card">

### sandkit.engine.api.swarmConsole.setSpawnJammed :id=setspawnjammed

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/swarmConsole.d.ts#L70" target="_blank" rel="noopener">swarmConsole.d.ts:70</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.swarmConsole.setSpawnJammed(...args: unknown[]): unknown">

```ts
setSpawnJammed(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Set whether swarm spawn is jammed.

</div>
