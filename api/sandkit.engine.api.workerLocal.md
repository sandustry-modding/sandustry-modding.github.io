# sandkit.engine.api.workerLocal

**`Internal`**

`sandkit.engine.api.workerLocal` — per-worker ephemeral key-value storage.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Available on worker threads only. Values do not persist across workers.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.workerLocal.clear :id=clear

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L14" target="_blank" rel="noopener">workerLocal.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.workerLocal.clear(...args: unknown[]): unknown">

```ts
clear(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Worker-local context first on workers; otherwise game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Remove all keys from worker-local storage.

</div>

<div class="smt-member-card">

### sandkit.engine.api.workerLocal.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L19" target="_blank" rel="noopener">workerLocal.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.workerLocal.get(...args: unknown[]): unknown">

```ts
get(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Worker-local context first on workers; otherwise game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return a value by key, or undefined when missing.

</div>

<div class="smt-member-card">

### sandkit.engine.api.workerLocal.getOrInit :id=getorinit

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L24" target="_blank" rel="noopener">workerLocal.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.workerLocal.getOrInit(...args: unknown[]): unknown">

```ts
getOrInit(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Worker-local context first on workers; otherwise game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return a value by key, initializing it when missing.

</div>

<div class="smt-member-card">

### sandkit.engine.api.workerLocal.set :id=set

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/workerLocal.d.ts#L29" target="_blank" rel="noopener">workerLocal.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.workerLocal.set(...args: unknown[]): unknown">

```ts
set(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Worker-local context first on workers; otherwise game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Store a value by key.

</div>
