# sandkit.api.shared (worker)

**`Internal`**

Worker thread only.

`sandkit.api.shared` — shared memory buffers for workers.

Workers **require** buffers created on the main thread. Main thread only
**gets** existing buffers. See shared for the shared base declarations.

 Worker extension of shared; not interchangeable with
main-thread `sandkit.api.shared`.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.shared.SharedArray :id=sharedarray

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/shared.d.ts#L51" target="_blank" rel="noopener">shared.d.ts:51</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.SharedArray = SharedArray">

```ts
SharedArray = SharedArray
```

</div>

Typed array backing store for a shared buffer.

</div>

<div class="smt-member-card">

### sandkit.api.shared.SharedArrayType :id=sharedarraytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/shared.d.ts#L53" target="_blank" rel="noopener">shared.d.ts:53</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.SharedArrayType = SharedArrayType">

```ts
SharedArrayType = SharedArrayType
```

</div>

Discriminator for the underlying typed array kind.

</div>
