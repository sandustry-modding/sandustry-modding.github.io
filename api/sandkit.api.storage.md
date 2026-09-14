# sandkit.api.storage

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.storage.ensure :id=ensure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L15" target="_blank" rel="noopener">storage.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.ensure(modId: string): JsonObjectV1">

```ts
ensure(modId: string): JsonObjectV1
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| modId | `string` | Mod identifier (typically `modinfo.id`). |

<div class="smt-member-anchors">

##### modId <!-- {docsify-ignore} -->

</div>

Ensure storage exists for a mod id.

[`JsonObjectV1`](api/shared.jsonvalue.md?id=jsonobjectv1)

</div>

<div class="smt-member-card">

### sandkit.api.storage.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L21" target="_blank" rel="noopener">storage.d.ts:21</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.get(modId: string, key: string): JsonValueV1 | undefined">

```ts
get(modId: string, key: string): JsonValueV1 | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| modId | `string` | Mod identifier. |
| key | `string` | Storage key. |

<div class="smt-member-anchors">

##### modId <!-- {docsify-ignore} -->

##### key <!-- {docsify-ignore} -->

</div>

Read a value from mod storage by key.

[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.storage.set :id=set

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L28" target="_blank" rel="noopener">storage.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.set(modId: string, key: string, value: JsonValueV1): void">

```ts
set(modId: string, key: string, value: JsonValueV1): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| modId | `string` | Mod identifier. |
| key | `string` | Storage key. |
| value | <code>[`JsonValueV1`](api/shared.jsonvalue.md?id=jsonvaluev1)</code> | JSON-serializable value. |

<div class="smt-member-anchors">

##### modId <!-- {docsify-ignore} -->

##### key <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

</div>

Write a value to mod storage by key.

</div>

<div class="smt-member-card">

### sandkit.api.storage.remove :id=remove

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/storage.d.ts#L34" target="_blank" rel="noopener">storage.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.storage.remove(modId: string, key: string): void">

```ts
remove(modId: string, key: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| modId | `string` | Mod identifier. |
| key | `string` | Storage key. |

<div class="smt-member-anchors">

##### modId <!-- {docsify-ignore} -->

##### key <!-- {docsify-ignore} -->

</div>

Remove a key from mod storage.

</div>
