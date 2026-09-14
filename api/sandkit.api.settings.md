# sandkit.api.settings

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.settings.FieldId :id=fieldid

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L34" target="_blank" rel="noopener">settings.d.ts:34</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.settings.FieldId = LooseString&lt;never&gt;">

```ts
FieldId = LooseString<never>
```

</div>

Settings field id. Any string is allowed.

</div>

<div class="smt-member-card">

### sandkit.api.settings.ConfigValueV1 :id=configvaluev1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L37" target="_blank" rel="noopener">settings.d.ts:37</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.settings.ConfigValueV1 = string | number | boolean | null">

```ts
ConfigValueV1 = string | number | boolean | null
```

</div>

Settings field value shape.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.settings.get :id=get

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L15" target="_blank" rel="noopener">settings.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.settings.get(fieldId: string &amp; object): ConfigValueV1 | undefined">

```ts
get(fieldId: string & object): ConfigValueV1 | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| fieldId | `string` & `object` | Settings field identifier. |

<div class="smt-member-anchors">

##### fieldId <!-- {docsify-ignore} -->

</div>

Return a settings field value by id.

[`ConfigValueV1`](?id=configvaluev1) &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.settings.getAll :id=getall

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L17" target="_blank" rel="noopener">settings.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.settings.getAll(): Readonly&lt;Record&lt;string, ConfigValueV1&gt;&gt;">

```ts
getAll(): Readonly<Record<string, ConfigValueV1>>
```

</div>

Return all settings as a read-only map.

`Readonly`&lt;`Record`&lt;`string`, [`ConfigValueV1`](?id=configvaluev1)&gt;&gt;

</div>

<div class="smt-member-card">

### sandkit.api.settings.onChange :id=onchange

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/settings.d.ts#L29" target="_blank" rel="noopener">settings.d.ts:29</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.settings.onChange(callback: (values: Readonly&lt;Record&lt;string, ConfigValueV1&gt;&gt;) =&gt; void): () =&gt; void">

```ts
onChange(callback: (values: Readonly<Record<string, ConfigValueV1>>) => void): () => void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| callback | <code>(`values`: `Readonly`&lt;`Record`&lt;`string`, [`ConfigValueV1`](?id=configvaluev1)&gt;&gt;) =&gt; `void`</code> | Called with the full settings map after a change. |

<div class="smt-member-anchors">

##### callback <!-- {docsify-ignore} -->

</div>

Subscribe to settings changes. Return an unsubscribe function.

() => `void`

#### Example

```ts
const unsubscribe = api.settings.onChange((values) => {
  applySettings(values);
});
```

</div>
