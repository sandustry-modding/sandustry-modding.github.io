# shared.engine

## Type Aliases <!-- {docsify-ignore} -->

<div class="smt-member-card">

### shared.engine.EngineFn :id=enginefn

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L11" target="_blank" rel="noopener">engine.d.ts:11</a></p>

<div class="smt-member-sig" data-sig="shared.engine.EngineFn = (...args: unknown[]) =&gt; unknown">

```ts
EngineFn = (...args: unknown[]) => unknown
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| args | <code>...`unknown`[]</code> |  |

<div class="smt-member-anchors">

##### args <!-- {docsify-ignore} -->

</div>

**`Internal`**

Stub for an unresolved engine method.

</div>

<div class="smt-member-card">

### shared.engine.EngineOverlapNs :id=engineoverlapns

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/shared/engine.d.ts#L17" target="_blank" rel="noopener">engine.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="shared.engine.EngineOverlapNs = Record&lt;string, EngineFn | Record&lt;string, unknown&gt; | unknown&gt;">

```ts
EngineOverlapNs = Record<string, EngineFn | Record<string, unknown> | unknown>
```

</div>

**`Internal`**

Loose bag for namespaces that overlap `sandkit.api` (different names / state-first).

</div>
