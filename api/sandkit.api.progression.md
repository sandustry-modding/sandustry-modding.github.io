# sandkit.api.progression

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.progression.ProgressionCompletionRequestV1 :id=progressioncompletionrequestv1

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L25" target="_blank" rel="noopener">progression.d.ts:25</a></p>

| Property | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | Progression step or quest identifier. |

<div class="smt-member-anchors">

##### id <!-- {docsify-ignore} -->

</div>

Progression completion request shape.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.progression.complete :id=complete

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/progression.d.ts#L22" target="_blank" rel="noopener">progression.d.ts:22</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.progression.complete(request: ProgressionCompletionRequestV1): boolean">

```ts
complete(request: ProgressionCompletionRequestV1): boolean
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| request | <code>[`ProgressionCompletionRequestV1`](?id=progressioncompletionrequestv1)</code> | Progression id and optional metadata for the step. |

<div class="smt-member-anchors">

##### request <!-- {docsify-ignore} -->

</div>

Mark a progression step complete. Return true when completion succeeds.

#### Example

```ts
const completed = api.progression.complete({
  domain: "objective",
  id: "all",
});
```

</div>
