# shared.jsonvalue

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.jsonvalue.JsonObjectV1 :id=jsonobjectv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L15" target="_blank" rel="noopener">jsonvalue.d.ts:15</a></p>

JSON object with string keys and [JsonValueV1](?id=jsonvaluev1) values.

Use for open-ended config bags and serialized mod data.

#### Indexable

```ts
[key: string]: JsonValueV1
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.jsonvalue.JsonValueV1 :id=jsonvaluev1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/jsonvalue.d.ts#L24" target="_blank" rel="noopener">jsonvalue.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="shared.jsonvalue.JsonValueV1 = string | number | boolean | JsonObjectV1 | JsonValueV1[] | null">

```ts
JsonValueV1 = string | number | boolean | JsonObjectV1 | JsonValueV1[] | null
```

</div>

JSON value: primitive, object, array, or null.

Does not include `undefined` — omit keys instead.

</div>
