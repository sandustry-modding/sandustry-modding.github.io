# sandkit.api.ui (worker)

**`Internal`**

Worker-thread `sandkit.api.ui` — toast messages.

 Worker subset; main thread exposes dialogs, regions, and hotbar helpers.

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.LocalizedText :id=localizedtext

<p class="smt-member-defined">Defined in: worker/api/ui.d.ts:23</p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.LocalizedText = LocalizedText">

```ts
LocalizedText = LocalizedText
```

</div>

Plain text, translation key object, or i18n translatable value.

</div>

<div class="smt-member-card">

### sandkit.api.ui.I18nTextKey :id=i18ntextkey

<p class="smt-member-defined">Defined in: worker/api/ui.d.ts:25</p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.I18nTextKey = I18nTextKey">

```ts
I18nTextKey = I18nTextKey
```

</div>

Translation key with optional parameter substitution.

</div>

<div class="smt-member-card">

### sandkit.api.ui.I18nTranslatable :id=i18ntranslatable

<p class="smt-member-defined">Defined in: worker/api/ui.d.ts:27</p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.I18nTranslatable = I18nTranslatable">

```ts
I18nTranslatable = I18nTranslatable
```

</div>

Value returned by `sandkit.api.i18n.translatable`.

</div>

<div class="smt-member-card">

### sandkit.api.ui.ToastOptions :id=toastoptions

<p class="smt-member-defined">Defined in: worker/api/ui.d.ts:29</p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.ToastOptions = ToastOptions">

```ts
ToastOptions = ToastOptions
```

</div>

Cooldown, style, and auto-dismiss options for [toast](?id=toast).

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.ui.toast :id=toast

<p class="smt-member-defined">Defined in: worker/api/ui.d.ts:20</p>

<div class="smt-member-sig" data-sig="sandkit.api.ui.toast(message: LocalizedText, options?: ToastOptions): void">

```ts
toast(message: LocalizedText, options?: ToastOptions): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| message | <code>[`LocalizedText`](api/sandkit.api.ui.md?id=localizedtext)</code> | Plain text, translation key, or translatable value. |
| options? | <code>[`ToastOptions`](api/sandkit.api.ui.md?id=toastoptions)</code> | Cooldown, style, and auto-dismiss options. |

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
