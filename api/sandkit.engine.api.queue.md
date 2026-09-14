# sandkit.engine.api.queue

**`Internal`**

`sandkit.engine.api.queue` — deferred tick queue with handlers.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.queue.enqueue :id=enqueue

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L15" target="_blank" rel="noopener">queue.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.queue.enqueue(...args: unknown[]): unknown">

```ts
enqueue(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Enqueue work to run on a future tick.

</div>

<div class="smt-member-card">

### sandkit.engine.api.queue.enqueueInTicks :id=enqueueinticks

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L20" target="_blank" rel="noopener">queue.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.queue.enqueueInTicks(...args: unknown[]): unknown">

```ts
enqueueInTicks(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Enqueue work to run after a tick delay.

</div>

<div class="smt-member-card">

### sandkit.engine.api.queue.enqueueSkipTick :id=enqueueskiptick

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L25" target="_blank" rel="noopener">queue.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.queue.enqueueSkipTick(...args: unknown[]): unknown">

```ts
enqueueSkipTick(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Enqueue work that skips the current tick.

</div>

<div class="smt-member-card">

### sandkit.engine.api.queue.process :id=process

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L30" target="_blank" rel="noopener">queue.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.queue.process(...args: unknown[]): unknown">

```ts
process(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Process pending queue items for the current tick.

</div>

<div class="smt-member-card">

### sandkit.engine.api.queue.registerHandler :id=registerhandler

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L35" target="_blank" rel="noopener">queue.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.queue.registerHandler(...args: unknown[]): unknown">

```ts
registerHandler(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register a handler for a queue item type.

</div>

<div class="smt-member-card">

### sandkit.engine.api.queue.removeByKey :id=removebykey

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/queue.d.ts#L40" target="_blank" rel="noopener">queue.d.ts:40</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.queue.removeByKey(...args: unknown[]): unknown">

```ts
removeByKey(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove queued items by key.

</div>
