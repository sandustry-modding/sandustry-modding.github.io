# sandkit.engine.api.strataform

**`Internal`**

`sandkit.engine.api.strataform` — strataform event triggers and type registration.

**Internal API.** Prefer [sandkit.api](api/sandkit.api.md) when a public method exists.
Methods use loose stubs; signatures may take game state as the first argument.
Engine methods pass game state as the first argument (args[0]); remaining entries are method-specific.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.engine.api.strataform.getDefaultConfig :id=getdefaultconfig

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L15" target="_blank" rel="noopener">strataform.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.strataform.getDefaultConfig(...args: unknown[]): unknown">

```ts
getDefaultConfig(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return the default strataform configuration.

</div>

<div class="smt-member-card">

### sandkit.engine.api.strataform.getRegisteredTypes :id=getregisteredtypes

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L20" target="_blank" rel="noopener">strataform.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.strataform.getRegisteredTypes(...args: unknown[]): unknown">

```ts
getRegisteredTypes(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Return all registered strataform types.

</div>

<div class="smt-member-card">

### sandkit.engine.api.strataform.registerType :id=registertype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L25" target="_blank" rel="noopener">strataform.d.ts:25</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.strataform.registerType(...args: unknown[]): unknown">

```ts
registerType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Register a custom strataform type.

</div>

<div class="smt-member-card">

### sandkit.engine.api.strataform.trigger :id=trigger

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L30" target="_blank" rel="noopener">strataform.d.ts:30</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.strataform.trigger(...args: unknown[]): unknown">

```ts
trigger(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Trigger a strataform event at a location.

</div>

<div class="smt-member-card">

### sandkit.engine.api.strataform.triggerByType :id=triggerbytype

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/engine/api/strataform.d.ts#L35" target="_blank" rel="noopener">strataform.d.ts:35</a></p>

<div class="smt-member-sig" data-sig="sandkit.engine.api.strataform.triggerByType(...args: unknown[]): unknown">

```ts
triggerByType(...args: unknown[]): unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> | Game state first, then method-specific arguments. |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

Trigger a strataform event by type id.

</div>
