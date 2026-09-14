# sandkit.api.storage.local

Local session storage without mod id scope.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.storage.local.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L42" target="_blank" rel="noopener">storage.d.ts:42</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.local.get(key: string): JsonValueV1 | undefined">

```ts
get(key: string): JsonValueV1 | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Storage key. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Read a local storage value by key.

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.storage.local.set :id=set

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L48" target="_blank" rel="noopener">storage.d.ts:48</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.local.set(key: string, value: JsonValueV1): void">

```ts
set(key: string, value: JsonValueV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Storage key. |
| value | <code>[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)</code> | JSON-serializable value. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

</div>

Write a local storage value by key.

</div>

<div class="smt-member-card">

### sandkit.api.storage.local.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L53" target="_blank" rel="noopener">storage.d.ts:53</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.local.remove(key: string): void">

```ts
remove(key: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Storage key. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Remove a local storage key.

</div>
