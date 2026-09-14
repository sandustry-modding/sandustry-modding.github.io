# sandkit.api.shared

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.shared.SharedArray :id=sharedarray

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L28" target="_blank" rel="noopener">shared.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.SharedArray = Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array">

```ts
SharedArray = Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array | Float32Array | Float64Array
```

</div>

Typed array backing a shared buffer.

Use [SharedArrayType](?id=sharedarraytype) when creating or requiring a buffer. The runtime
returns the matching `*Array` constructor for the configured type.

</div>

<div class="smt-member-card">

### sandkit.api.shared.SharedArrayType :id=sharedarraytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/shared.d.ts#L39" target="_blank" rel="noopener">shared.d.ts:39</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.shared.SharedArrayType = &quot;uint8&quot; | &quot;uint16&quot; | &quot;uint32&quot; | &quot;int8&quot; | &quot;int16&quot; | &quot;int32&quot; | &quot;float32&quot; | &quot;float64&quot;">

```ts
SharedArrayType = "uint8" | "uint16" | "uint32" | "int8" | "int16" | "int32" | "float32" | "float64"
```

</div>

Discriminator for the underlying typed array kind.

</div>
