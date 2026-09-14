# sandkit.api.i18n

`sandkit.api.i18n` — translations, locales, and display strings for mods.
Main thread only.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.i18n.I18nNumberFormatOptions :id=i18nnumberformatoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L207" target="_blank" rel="noopener">i18n.d.ts:207</a></p>

| Property | Type | Description |
| --- | --- | --- |
| minimumFractionDigits? | <code>number</code> | Minimum fraction digits. |
| maximumFractionDigits? | <code>number</code> | Maximum fraction digits. |
| useGrouping? | <code>boolean</code> | When true, use grouping separators. |

<div class="smt-member-anchors">

##### minimumFractionDigits? <!-- {docsify-ignore} -->

##### maximumFractionDigits? <!-- {docsify-ignore} -->

##### useGrouping? <!-- {docsify-ignore} -->

</div>

Number format options for [formatNumber](?id=formatnumber).

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.i18n.Locale :id=locale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L204" target="_blank" rel="noopener">i18n.d.ts:204</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.Locale = LooseString&lt;&quot;en&quot;&gt;">

```ts
Locale = LooseString<"en">
```

</div>

Locale code. `"en"` autocompletes; any locale string is allowed.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.i18n.t :id=t

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L22" target="_blank" rel="noopener">i18n.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.t(key: string, params?: Record&lt;string, string | number&gt;): string">

```ts
t(key: string, params?: Record<string, string | number>): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Translation key. |
| params? | `Record`<`string`, `string` &#124; `number`> | Placeholder values for the key template. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### params? <!-- {docsify-ignore} -->

</div>

Translates a key with optional parameter substitution.

#### Example

```ts
const message = api.i18n.t("mods|example|count", {
  count: 3,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.i18n.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L38" target="_blank" rel="noopener">i18n.d.ts:38</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.register(locale: Locale, translations: Record&lt;string, string&gt;): void">

```ts
register(locale: Locale, translations: Record<string, string>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| locale | <code>[`Locale`](?id=locale)</code> | Locale code (e.g. `en`). |
| translations | `Record`<`string`, `string`> | Map of keys to translated strings. |

<div class="smt-member-anchors">

##### locale <!-- {docsify-ignore} -->

##### translations <!-- {docsify-ignore} -->

</div>

Registers translation strings for a locale.

#### Example

```ts
api.i18n.register("en", {
  "mods|example|title": "Example",
});
```

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getLocale :id=getlocale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L44" target="_blank" rel="noopener">i18n.d.ts:44</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getLocale(): Locale">

```ts
getLocale(): Locale
```

</div>

Returns the active locale code.

[`Locale`](?id=locale)

</div>

<div class="smt-member-card">

### sandkit.api.i18n.hasTranslation :id=hastranslation

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L53" target="_blank" rel="noopener">i18n.d.ts:53</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.hasTranslation(key: string, locale?: Locale): boolean">

```ts
hasTranslation(key: string, locale?: Locale): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Translation key. |
| locale? | <code>[`Locale`](?id=locale)</code> | Optional locale; defaults to the active locale. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### locale? <!-- {docsify-ignore} -->

</div>

Returns true when a translation exists for the key.

</div>

<div class="smt-member-card">

### sandkit.api.i18n.setLocale :id=setlocale

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L61" target="_blank" rel="noopener">i18n.d.ts:61</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.setLocale(locale: Locale): Promise&lt;void&gt;">

```ts
setLocale(locale: Locale): Promise<void>
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| locale | <code>[`Locale`](?id=locale)</code> | Locale code to activate. |

<div class="smt-member-anchors">

##### locale <!-- {docsify-ignore} -->

</div>

Sets the active locale.

`Promise`&lt;`void`&gt;

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getLanguages :id=getlanguages

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L67" target="_blank" rel="noopener">i18n.d.ts:67</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getLanguages(): object[]">

```ts
getLanguages(): object[]
```

</div>

Returns metadata for all known languages.

`object`[]

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getAvailableLocales :id=getavailablelocales

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L78" target="_blank" rel="noopener">i18n.d.ts:78</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getAvailableLocales(): Locale[]">

```ts
getAvailableLocales(): Locale[]
```

</div>

Returns locale codes that have registered translations.

[`Locale`](?id=locale)[]

</div>

<div class="smt-member-card">

### sandkit.api.i18n.formatNumber :id=formatnumber

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L94" target="_blank" rel="noopener">i18n.d.ts:94</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.formatNumber(value: number, options?: I18nNumberFormatOptions): string">

```ts
formatNumber(value: number, options?: I18nNumberFormatOptions): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| value | `number` | Number to format. |
| options? | <code>[`I18nNumberFormatOptions`](?id=i18nnumberformatoptions)</code> | Intl-style number format options. |

<div class="smt-member-anchors">

##### value <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Formats a number for the active locale.

#### Example

```ts
const formatted = api.i18n.formatNumber(1234.5, {
  maximumFractionDigits: 1,
});
```

</div>

<div class="smt-member-card">

### sandkit.api.i18n.joinKey :id=joinkey

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L102" target="_blank" rel="noopener">i18n.d.ts:102</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.joinKey(...parts: string[]): string">

```ts
joinKey(...parts: string[]): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| parts | <code>...`string`[]</code> | Key segments joined with `.`. |

<div class="smt-member-anchors">

##### parts <!-- {docsify-ignore} -->

</div>

Joins key parts into a single translation key.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.i18n.key~~ :id=key

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L108" target="_blank" rel="noopener">i18n.d.ts:108</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [joinKey](api/sandkit.api.i18n.md?id=joinkey) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.key(...parts: string[]): string">

```ts
key(...parts: string[]): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| parts | <code>...`string`[]</code> |  |

<div class="smt-member-anchors">

##### parts <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getName :id=getname

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L124" target="_blank" rel="noopener">i18n.d.ts:124</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getName(definition: object): string">

```ts
getName(definition: object): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>Object with `nameKey` or `name`.</code> |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Returns the display name from a definition with nameKey or name.

#### Example

```ts
const name = api.i18n.getName({
  name: "Example Machine",
  nameKey: "structures|exampleMachine|name",
});
```

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getDescription :id=getdescription

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L132" target="_blank" rel="noopener">i18n.d.ts:132</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getDescription(definition: object): string">

```ts
getDescription(definition: object): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| definition | <code>Object with `descriptionKey` or `description`.</code> |  |

<div class="smt-member-anchors">

##### definition <!-- {docsify-ignore} -->

</div>

Returns the description from a definition with descriptionKey or description.

</div>

<div class="smt-member-card">

### sandkit.api.i18n.createTranslatable :id=createtranslatable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L144" target="_blank" rel="noopener">i18n.d.ts:144</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.createTranslatable(key: string, fallback: string): object">

```ts
createTranslatable(key: string, fallback: string): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Translation key. |
| fallback | `string` | Text used when no translation is registered. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### fallback <!-- {docsify-ignore} -->

</div>

Creates a translatable string object with a fallback.

\_\_translatable: true key: string fallback: string

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.i18n.translatable~~ :id=translatable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L153" target="_blank" rel="noopener">i18n.d.ts:153</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [createTranslatable](api/sandkit.api.i18n.md?id=createtranslatable) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.translatable(key: string, fallback: string): object">

```ts
translatable(key: string, fallback: string): object
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` |  |
| fallback | `string` |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### fallback <!-- {docsify-ignore} -->

</div>

\_\_translatable: true key: string fallback: string

</div>

<div class="smt-member-card">

### sandkit.api.i18n.setGlobal :id=setglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L165" target="_blank" rel="noopener">i18n.d.ts:165</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.setGlobal(key: string, value: string | (() =&gt; string)): void">

```ts
setGlobal(key: string, value: string | (() => string)): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Global helper key. |
| value | `string` &#124; (() => `string`) | Static string or function that returns the current value. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### value <!-- {docsify-ignore} -->

</div>

Sets a global string or lazy resolver used in translations.

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getGlobal :id=getglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L173" target="_blank" rel="noopener">i18n.d.ts:173</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getGlobal(key: string): string | undefined">

```ts
getGlobal(key: string): string | undefined
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Global helper key. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Returns a global translation helper value.

`string` &#124; `undefined`

</div>

<div class="smt-member-card">

### sandkit.api.i18n.removeGlobal :id=removeglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L181" target="_blank" rel="noopener">i18n.d.ts:181</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.removeGlobal(key: string): void">

```ts
removeGlobal(key: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` | Global helper key. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

Removes a global translation helper value.

</div>

<div class="smt-member-card" data-deprecated="true">

### ~~sandkit.api.i18n.clearGlobal~~ :id=clearglobal

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L187" target="_blank" rel="noopener">i18n.d.ts:187</a></p>

<div class="smt-member-deprecated">
<span class="smt-member-deprecated-label">Deprecated</span>
<div class="smt-member-deprecated-note" markdown="1">

Use [removeGlobal](api/sandkit.api.i18n.md?id=removeglobal) instead.

</div>
</div>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.clearGlobal(key: string): void">

```ts
clearGlobal(key: string): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| key | `string` |  |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

</div>

</div>

<div class="smt-member-card">

### sandkit.api.i18n.getGlobals :id=getglobals

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L193" target="_blank" rel="noopener">i18n.d.ts:193</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.getGlobals(): Record&lt;string, string&gt;">

```ts
getGlobals(): Record<string, string>
```

</div>

Returns all global translation helper values.

`Record`&lt;`string`, `string`&gt;

</div>

<div class="smt-member-card">

### sandkit.api.i18n.formatKeyForDisplay :id=formatkeyfordisplay

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/i18n.d.ts#L201" target="_blank" rel="noopener">i18n.d.ts:201</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.i18n.formatKeyForDisplay(keyCode: string): string">

```ts
formatKeyForDisplay(keyCode: string): string
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| keyCode | `string` | Keyboard key code or binding name. |

<div class="smt-member-anchors">

##### keyCode <!-- {docsify-ignore} -->

</div>

Formats a key code for display in UI.

</div>
