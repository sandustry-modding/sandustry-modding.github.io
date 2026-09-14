# sandkit.api.ui (worker)

**`Internal`**

Shared `sandkit.api.ui` base — lightweight UI helpers available on workers.

Main thread adds richer UI APIs on top of this shape.

 Base namespace reused by main and worker declarations.

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.I18nTextKey :id=i18ntextkey

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L25" target="_blank" rel="noopener">ui.d.ts:25</a></p>

| Property | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | Namespaced translation key (for example `ui&#124;save&#124;save`). |
| params? | <code>Record&lt;string, string &#124; number&gt;</code> | Values merged into the translated string. |

<div class="smt-member-anchors">

##### key <!-- {docsify-ignore} -->

##### params? <!-- {docsify-ignore} -->

</div>

Translation key with optional parameter substitution.

</div>

<div class="smt-member-card">

### sandkit.api.ui.I18nTranslatable :id=i18ntranslatable

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L33" target="_blank" rel="noopener">ui.d.ts:33</a></p>

| Property | Type | Description |
| --- | --- | --- |
| \_\_translatable | <code>true</code> |  |
| key | <code>string</code> |  |
| fallback | <code>string</code> |  |

<div class="smt-member-anchors">

##### \_\_translatable <!-- {docsify-ignore} -->

##### key <!-- {docsify-ignore} -->

##### fallback <!-- {docsify-ignore} -->

</div>

Value returned by `sandkit.api.i18n.translatable`.

</div>

<div class="smt-member-card">

### sandkit.api.ui.ToastOptions :id=toastoptions

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L40" target="_blank" rel="noopener">ui.d.ts:40</a></p>

| Property | Type | Description |
| --- | --- | --- |
| cooldown? | <code>number</code> | Minimum ms before the same toast can show again. |
| cooldownKey? | <code>string</code> | Dedupe key paired with [ToastOptions.cooldown](?id=cooldown). Defaults to the message string or `message.key`. |
| duration? | <code>number &#124; false</code> | Auto-dismiss delay in ms. Default `5000`. Set `false` to keep the toast until another toast replaces it. |
| variant? | <code>string &amp; object &#124; &quot;danger&quot; &#124; &quot;hint&quot; &#124; &quot;hole&quot;</code> | Visual style applied to the toast body. |

<div class="smt-member-anchors">

##### cooldown? <!-- {docsify-ignore} -->

##### cooldownKey? <!-- {docsify-ignore} -->

##### duration? <!-- {docsify-ignore} -->

##### variant? <!-- {docsify-ignore} -->

</div>

Cooldown, style, and auto-dismiss options for [toast](?id=toast).

</div>

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.LocalizedText :id=localizedtext

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L22" target="_blank" rel="noopener">ui.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.LocalizedText = string | I18nTextKey | I18nTranslatable">

```ts
LocalizedText = string | I18nTextKey | I18nTranslatable
```

</div>

Plain text, translation key object, or i18n translatable value.

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.toast :id=toast

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/api/ui.d.ts#L19" target="_blank" rel="noopener">ui.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.toast(message: LocalizedText, options?: ToastOptions): void">

```ts
toast(message: LocalizedText, options?: ToastOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | <code>[`LocalizedText`](?id=localizedtext)</code> | Plain text, translation key, or translatable value. |
| options? | <code>[`ToastOptions`](?id=toastoptions)</code> | Cooldown, style, and auto-dismiss options. |

<div class="smt-member-anchors">

##### message <!-- {docsify-ignore} -->

##### options? <!-- {docsify-ignore} -->

</div>

Show a short on-screen toast message.

#### Example

**Worker entry**

```ts
api.ui.toast({ key: "mods|example|workerToast" });
```

</div>
