# shared.nominal

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.nominal.LooseString :id=loosestring

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L16" target="_blank" rel="noopener">nominal.d.ts:16</a></p>

<div class="smt-member-sig" data-sig="shared.nominal.LooseString&lt;T *extends* string&gt; = T | string &amp; object">

```ts
shared.nominal.LooseString<T *extends* string> = T | string & object
```

</div>

Known string literals plus any other string.
`T | string` collapses to `string` and drops autocomplete.

`T` *extends* `string`

</div>

<div class="smt-member-card">

### shared.nominal.LooseNumber :id=loosenumber

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L22" target="_blank" rel="noopener">nominal.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="shared.nominal.LooseNumber&lt;T *extends* number&gt; = T | number &amp; object">

```ts
shared.nominal.LooseNumber<T *extends* number> = T | number & object
```

</div>

Known numeric literals plus any other number.
`T | number` collapses to `number` and drops autocomplete.

`T` *extends* `number`

</div>

<div class="smt-member-card">

### shared.nominal.TaggedNumber :id=taggednumber

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L28" target="_blank" rel="noopener">nominal.d.ts:28</a></p>

<div class="smt-member-sig" data-sig="shared.nominal.TaggedNumber&lt;Tag *extends* string&gt; = number &amp; object">

```ts
shared.nominal.TaggedNumber<Tag *extends* string> = number & object
```

</div>

Number handle that does not mix with a different tag.
Plain `number` is not assignable; numeric literals and enum members are.

#### Type Declaration

##### \_\_tag?

```ts
readonly optional \_\_tag?: Tag
```

`Tag` *extends* `string`

</div>

<div class="smt-member-card">

### shared.nominal.CellId :id=cellid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/nominal.d.ts#L31" target="_blank" rel="noopener">nominal.d.ts:31</a></p>

<div class="smt-member-sig" data-sig="shared.nominal.CellId = TaggedNumber&lt;&quot;cellId&quot;&gt;">

```ts
CellId = TaggedNumber<"cellId">
```

</div>

Packed simulation cell id from `world.getCellIdAtCell`.

</div>
