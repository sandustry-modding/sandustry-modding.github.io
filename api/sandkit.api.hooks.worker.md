# sandkit.api.hooks (worker)

**`Internal`**

Worker-thread `sandkit.api.hooks` — intercept and modify simulation hook points.

 Worker-only surface; do not use main-thread [sandkit.api.hooks](api/sandkit.md?id=hooks).

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.HookContext :id=hookcontext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L113" target="_blank" rel="noopener">hooks.d.ts:113</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.HookContext = object">

```ts
HookContext = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| cancelled | <code>boolean</code> | True after [cancel](?id=cancel) was called on this context. |

<div class="smt-member-anchors">

##### cancelled <!-- {docsify-ignore} -->

</div>

| Method | Signature | Description |
| --- | --- | --- |
| cancel() | <code>(): void</code> | When called, the intercepted action is skipped. |

<div class="smt-member-anchors">

##### cancel() <!-- {docsify-ignore} -->

</div>

Context passed to intercept hook callbacks.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.HookGuard :id=hookguard

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L121" target="_blank" rel="noopener">hooks.d.ts:121</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.HookGuard = object">

```ts
HookGuard = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| elementType? | <code>ElementType</code> | Required for element-scoped intercept hooks and optional on emit. |
| terrainType? | <code>TerrainType</code> | Required for terrain-scoped event guards; optional on emit. |

<div class="smt-member-anchors">

##### elementType? <!-- {docsify-ignore} -->

##### terrainType? <!-- {docsify-ignore} -->

</div>

Guard filter for worker hook registration.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookOptions :id=intercepthookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L129" target="_blank" rel="noopener">hooks.d.ts:129</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookOptions&lt;K *extends* InterceptHookId&gt; = K *extends* ElementGuardedInterceptHookId ? object : K *extends* TerrainGuardedInterceptHookId ? object : object">

```ts
sandkit.api.hooks.InterceptHookOptions<K *extends* InterceptHookId> = K *extends* ElementGuardedInterceptHookId ? object : K *extends* TerrainGuardedInterceptHookId ? object : object
```

</div>

Options for [intercept](?id=intercept).

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookOptions :id=modifyhookoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L137" target="_blank" rel="noopener">hooks.d.ts:137</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookOptions = object">

```ts
ModifyHookOptions = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| guard? | <code>HookGuard</code> |  |
| priority? | <code>number</code> |  |

<div class="smt-member-anchors">

##### guard? <!-- {docsify-ignore} -->

##### priority? <!-- {docsify-ignore} -->

</div>

Options for [modify](?id=modify).

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ElementGuardedInterceptHookId :id=elementguardedintercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L143" target="_blank" rel="noopener">hooks.d.ts:143</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ElementGuardedInterceptHookId = &quot;cell:process&quot; | &quot;element:update&quot; | &quot;element:move:blocked&quot; | &quot;element:blocked&quot; | &quot;element:duration:expire&quot; | &quot;element:duration&quot;">

```ts
ElementGuardedInterceptHookId = "cell:process" | "element:update" | "element:move:blocked" | "element:blocked" | "element:duration:expire" | "element:duration"
```

</div>

Intercept hook ids with a required element guard.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.TerrainGuardedInterceptHookId :id=terrainguardedintercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L152" target="_blank" rel="noopener">hooks.d.ts:152</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.TerrainGuardedInterceptHookId = &quot;fire:terrain:burn&quot;">

```ts
TerrainGuardedInterceptHookId = "fire:terrain:burn"
```

</div>

Intercept hook ids with a required terrain guard.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookId :id=intercepthookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L155" target="_blank" rel="noopener">hooks.d.ts:155</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookId = LooseString&lt;ElementGuardedInterceptHookId | TerrainGuardedInterceptHookId | &quot;element:move&quot; | &quot;fire:element:burn&quot; | &quot;shaker:elementOn&quot;&gt;">

```ts
InterceptHookId = LooseString<ElementGuardedInterceptHookId | TerrainGuardedInterceptHookId | "element:move" | "fire:element:burn" | "shaker:elementOn">
```

</div>

Known worker intercept hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookId :id=modifyhookid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L164" target="_blank" rel="noopener">hooks.d.ts:164</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookId = LooseString&lt;string&gt;">

```ts
ModifyHookId = LooseString<string>
```

</div>

Known worker modify hook ids plus custom strings.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ElementBlockedCollider :id=elementblockedcollider

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L167" target="_blank" rel="noopener">hooks.d.ts:167</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ElementBlockedCollider = LooseString&lt;&quot;terrain&quot; | &quot;element&quot; | &quot;unauthorized&quot;&gt;">

```ts
ElementBlockedCollider = LooseString<"terrain" | "element" | "unauthorized">
```

</div>

What an element collided with on [InterceptHookMap](?id=intercepthookmap) `"element:move:blocked"`.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ElementBlockedDirection :id=elementblockeddirection

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L170" target="_blank" rel="noopener">hooks.d.ts:170</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ElementBlockedDirection = LooseString&lt;&quot;down&quot; | &quot;up&quot; | &quot;horizontal&quot;&gt;">

```ts
ElementBlockedDirection = LooseString<"down" | "up" | "horizontal">
```

</div>

Blocked-move direction on [InterceptHookMap](?id=intercepthookmap) `"element:move:blocked"`.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ElementSimData :id=elementsimdata

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L176" target="_blank" rel="noopener">hooks.d.ts:176</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ElementSimData = object">

```ts
ElementSimData = object
```

</div>

| Property | Type | Description |
| --- | --- | --- |
| type | <code>Uint8Array</code> |  |
| x | <code>Uint16Array</code> |  |
| y | <code>Uint16Array</code> |  |
| velocityX | <code>Float32Array</code> |  |
| velocityY | <code>Float32Array</code> |  |
| minVelocityX | <code>Float32Array</code> |  |
| minVelocityY | <code>Float32Array</code> |  |
| thresholdX | <code>Float32Array</code> |  |
| thresholdY | <code>Float32Array</code> |  |
| hasBeenUpdated | <code>Uint8Array</code> |  |
| isFreeFalling | <code>Uint8Array</code> |  |
| density | <code>Float32Array</code> |  |
| variantIndex | <code>Uint8Array</code> |  |
| durationMax | <code>Float32Array</code> |  |
| durationLeft | <code>Float32Array</code> |  |
| skipPhysics | <code>Uint8Array</code> |  |
| movesYAxis | <code>Uint16Array</code> |  |
| movesYAxisCount | <code>Uint16Array</code> |  |
| lastSideChecked | <code>Int16Array</code> |  |
| linkedElementIndex | <code>Uint32Array</code> |  |
| hasDuration | <code>Uint8Array</code> |  |
| dataField1 | <code>Uint16Array</code> |  |
| dataField2 | <code>Int16Array</code> |  |
| dataField3 | <code>Uint16Array</code> |  |
| dataField4 | <code>Float32Array</code> |  |

<div class="smt-member-anchors">

##### type <!-- {docsify-ignore} -->

##### x <!-- {docsify-ignore} -->

##### y <!-- {docsify-ignore} -->

##### velocityX <!-- {docsify-ignore} -->

##### velocityY <!-- {docsify-ignore} -->

##### minVelocityX <!-- {docsify-ignore} -->

##### minVelocityY <!-- {docsify-ignore} -->

##### thresholdX <!-- {docsify-ignore} -->

##### thresholdY <!-- {docsify-ignore} -->

##### hasBeenUpdated <!-- {docsify-ignore} -->

##### isFreeFalling <!-- {docsify-ignore} -->

##### density <!-- {docsify-ignore} -->

##### variantIndex <!-- {docsify-ignore} -->

##### durationMax <!-- {docsify-ignore} -->

##### durationLeft <!-- {docsify-ignore} -->

##### skipPhysics <!-- {docsify-ignore} -->

##### movesYAxis <!-- {docsify-ignore} -->

##### movesYAxisCount <!-- {docsify-ignore} -->

##### lastSideChecked <!-- {docsify-ignore} -->

##### linkedElementIndex <!-- {docsify-ignore} -->

##### hasDuration <!-- {docsify-ignore} -->

##### dataField1 <!-- {docsify-ignore} -->

##### dataField2 <!-- {docsify-ignore} -->

##### dataField3 <!-- {docsify-ignore} -->

##### dataField4 <!-- {docsify-ignore} -->

</div>

Shared `elementData` SOA passed to [InterceptHookMap](?id=intercepthookmap) `"element:update"`.
Index with `elementIndex`.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookMap :id=intercepthookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L205" target="_blank" rel="noopener">hooks.d.ts:205</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookMap = object">

```ts
InterceptHookMap = object
```

</div>

<h4 class="smt-hook-heading" id="cell-process"><code>cell:process</code></h4>

```ts
{
  cellId: CellId;
  x: number;
  y: number;
  dt: number;
  runOrder: number;
}
```

<h4 class="smt-hook-heading" id="element-update"><code>element:update</code></h4>

```ts
{
  cellId: CellId;
  x: number;
  y: number;
  dt: number;
  elementIndex: number;
  elementData: ElementSimData;
  elementType: ElementType;
  matterType: MatterType;
  matterConfig: unknown;
}
```

<h4 class="smt-hook-heading" id="element-move"><code>element:move</code></h4>

```ts
{
  cellId: CellId;
  elementIndex: number;
  elementType: ElementType;
  source: Vector2;
  destination: Vector2;
}
```

<h4 class="smt-hook-heading" id="element-move-blocked"><code>element:move:blocked</code></h4>

```ts
{
  cellId: CellId;
  elementIndex: number;
  elementType: ElementType;
  position: Vector2;
  collidedAt: Vector2;
  velocity: Vector2;
  collidedWith: ElementBlockedCollider;
  collidedElementType: ElementType;
  collidedCellId: CellId;
  direction: ElementBlockedDirection;
  linkedElementType: ElementType;
}
```

<h4 class="smt-hook-heading" id="element-blocked"><code>element:blocked</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
InterceptHookMap["element:move:blocked"]
```

<h4 class="smt-hook-heading" id="element-duration-expire"><code>element:duration:expire</code></h4>

```ts
{
  elementIndex: number;
  elementType: ElementType;
  x: number;
  y: number;
}
```

<h4 class="smt-hook-heading" id="element-duration"><code>element:duration</code></h4>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Deprecated alias.

</div>
</div>

```ts
InterceptHookMap["element:duration:expire"]
```

<h4 class="smt-hook-heading" id="fire-element-burn"><code>fire:element:burn</code></h4>

```ts
{ elementType: ElementType }
```

<h4 class="smt-hook-heading" id="fire-terrain-burn"><code>fire:terrain:burn</code></h4>

```ts
{
  terrainType: TerrainType;
  sourceElementType: ElementType;
  sourceX: number;
  sourceY: number;
  wasUndamaged: boolean;
}
```

<h4 class="smt-hook-heading" id="shaker-elementOn"><code>shaker:elementOn</code></h4>

```ts
{
  cellId: CellId;
  elementIndex: number;
  elementType: ElementType;
  structureType: StructureType;
}
```

Intercept hook argument shapes keyed by hook id.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookMap :id=modifyhookmap

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L271" target="_blank" rel="noopener">hooks.d.ts:271</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookMap = Record&lt;string, unknown&gt;">

```ts
ModifyHookMap = Record<string, unknown>
```

</div>

Modify hook argument shapes keyed by hook id. Unlisted ids use `unknown`.

</div>

<div class="smt-member-card">

### sandkit.api.hooks.InterceptHookArgs :id=intercepthookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L274" target="_blank" rel="noopener">hooks.d.ts:274</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.InterceptHookArgs&lt;K *extends* InterceptHookId&gt; = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown">

```ts
sandkit.api.hooks.InterceptHookArgs<K *extends* InterceptHookId> = K *extends* keyof InterceptHookMap ? InterceptHookMap[K] : unknown
```

</div>

Intercept hook args for a given hook id.

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

</div>

<div class="smt-member-card">

### sandkit.api.hooks.ModifyHookArgs :id=modifyhookargs

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L279" target="_blank" rel="noopener">hooks.d.ts:279</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.ModifyHookArgs&lt;K *extends* ModifyHookId&gt; = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown">

```ts
sandkit.api.hooks.ModifyHookArgs<K *extends* ModifyHookId> = K *extends* keyof ModifyHookMap ? ModifyHookMap[K] : unknown
```

</div>

Modify hook args for a given hook id.

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.hooks.intercept :id=intercept

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L85" target="_blank" rel="noopener">hooks.d.ts:85</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.intercept&lt;K *extends* InterceptHookId&gt;(hookId: K, callback: (args: InterceptHookArgs&lt;K&gt;, context: HookContext) =&gt; void, options?: InterceptHookOptions&lt;K&gt;): () =&gt; void">

```ts
sandkit.api.hooks.intercept<K *extends* InterceptHookId>(hookId: K, callback: (args: InterceptHookArgs<K>, context: HookContext) => void, options?: InterceptHookOptions<K>): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | <code>(`args`: [`InterceptHookArgs`](?id=intercepthookargs)&lt;`K`&gt;, `context`: [`HookContext`](?id=hookcontext)) =&gt; `void`</code> | Called with hook arguments and context; may cancel the hook. |
| options? | <code>[`InterceptHookOptions`](?id=intercepthookoptions)&lt;`K`&gt;</code> | Optional guard and priority. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register an intercept hook on this worker. Returns an unsubscribe function.

`K` *extends* [`InterceptHookId`](?id=intercepthookid)

() => `void`

#### Examples

**cell:process**

```ts
api.hooks.intercept("cell:process", handleCell, {
  guard: { elementType },
});
```

**element:update**

```ts
api.hooks.intercept("element:update", handleUpdate, {
  guard: { elementType },
});
```

**element:move**

```ts
api.hooks.intercept("element:move", (args, context) => {
  handleElementMove(args, context);
});
```

**element:move:blocked**

```ts
api.hooks.intercept(
  "element:move:blocked",
  (args, context) => {
    handleBlockedMovement(args, context);
  },
  { guard: { elementType } },
);
```

**element:duration:expire**

```ts
api.hooks.intercept(
  "element:duration:expire",
  (args, context) => {
    handleDurationExpiry(args, context);
  },
  { guard: { elementType } },
);
```

**fire:element:burn**

```ts
api.hooks.intercept("fire:element:burn", (args, context) => {
  handleElementBurn(args, context);
});
```

**fire:terrain:burn**

```ts
api.hooks.intercept("fire:terrain:burn", handleTerrainBurn, {
  guard: { terrainType },
});
```

**shaker:elementOn**

```ts
api.hooks.intercept("shaker:elementOn", (args, context) => {
  handleShakerElement(args, context);
});
```

</div>

<div class="smt-member-card">

### sandkit.api.hooks.modify :id=modify

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/hooks.d.ts#L106" target="_blank" rel="noopener">hooks.d.ts:106</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.hooks.modify&lt;K *extends* ModifyHookId&gt;(hookId: K, callback: (args: ModifyHookArgs&lt;K&gt;) =&gt; void, options?: ModifyHookOptions): () =&gt; void">

```ts
sandkit.api.hooks.modify<K *extends* ModifyHookId>(hookId: K, callback: (args: ModifyHookArgs<K>) => void, options?: ModifyHookOptions): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| hookId | `K` | Registered hook identifier. |
| callback | <code>(`args`: [`ModifyHookArgs`](?id=modifyhookargs)&lt;`K`&gt;) =&gt; `void`</code> | Called with hook arguments; may mutate hook payload. |
| options? | <code>[`ModifyHookOptions`](?id=modifyhookoptions)</code> | Optional guard and priority. |

<div class="smt-member-anchors">

##### hookId <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Register a modifier hook on this worker. Returns an unsubscribe function.

`K` *extends* [`ModifyHookId`](?id=modifyhookid)

() => `void`

#### Example

**Worker entry**

```ts
api.hooks.modify("example:prepare", (args) => {
  args.value *= 2;
});
```

</div>
