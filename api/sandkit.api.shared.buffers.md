# sandkit.api.shared.buffers

Shared buffer ensure and lookup.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.shared.buffers.ensure :id=ensure

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L29" target="_blank" rel="noopener">shared.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.ensure(key: string, config: object): SharedArray">

```ts
ensure(key: string, config: object): SharedArray
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Buffer name shared across threads. |
| config | <code>Typed array kind and element count.</code> |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### config <!-- {docsify-ignore} -->

</div>

Create or return a named shared buffer with type and length.

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray)

#### Example

```ts
const counts = api.shared.buffers.ensure("counts", {
  type: "uint32",
  length: 4,
});
```

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.shared.buffers.create~~ :id=create

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/shared.d.ts#L38" target="_blank" rel="noopener">shared.d.ts:38</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [ensure](api/sandkit.api.shared.buffers.md?id=ensure) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.create(key: string, config: object): SharedArray">

```ts
create(key: string, config: object): SharedArray
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` |  |
| config | <code>{ type: [`SharedArrayType`](api/sandkit.api.shared.md?id=sharedarraytype); length: number }</code> |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### config <!-- {docsify-ignore} -->

</div>

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray)

</div>

<div class="smt-member-card">

### sandkit.api.shared.buffers.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L19" target="_blank" rel="noopener">shared.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.get(key: string): SharedArray | undefined">

```ts
get(key: string): SharedArray | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Buffer name shared across threads. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Look up a named shared buffer without creating it.

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray) &#124; `undefined` The typed array, or `undefined` when the buffer does not exist.

</div>
