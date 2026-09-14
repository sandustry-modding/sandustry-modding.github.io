# sandkit.api.shared.buffers (worker)

Named shared memory buffers for worker threads.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.shared.buffers.require :id=require

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/shared.d.ts#L36" target="_blank" rel="noopener">shared.d.ts:36</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.buffers.require(key: string, config: object): SharedArray">

```ts
require(key: string, config: object): SharedArray
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Buffer name shared across threads. |
| config | <code>Expected array type and length for validation.</code> |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### config <!-- {docsify-ignore} -->

</div>

Attach to a named shared buffer on this worker.

The buffer must already exist on the main thread with the same
[SharedArrayType](api/sandkit.api.shared.md?id=sharedarraytype) and length as `config`.

[`SharedArray`](api/sandkit.api.shared.md?id=sharedarray)

#### Example

```ts
const counts = api.shared.buffers.require("counts", {
  type: "uint32",
  length: 4,
});
```

</div>
