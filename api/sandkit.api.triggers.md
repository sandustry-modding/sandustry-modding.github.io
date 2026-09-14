# sandkit.api.triggers

## Interfaces <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.triggers.MainTriggerDefinition :id=maintriggerdefinition

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L27" target="_blank" rel="noopener">triggers.d.ts:27</a></p>

| Property | Type | Description |
| --- | --- | --- |
| interval | <code>number</code> | Interval between callbacks in simulation ticks. |
| callback | <code>() =&gt; void</code> | Called each time the trigger fires. |

<div class="smt-member-anchors">

##### interval <!-- {docsify-ignore} -->

##### callback <!-- {docsify-ignore} -->

</div>

Main-thread trigger definition shape.

#### Indexable

```ts
[key: string]: unknown
```

</div>

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.triggers.register :id=register

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/triggers.d.ts#L24" target="_blank" rel="noopener">triggers.d.ts:24</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.triggers.register(triggerId: string, definition: MainTriggerDefinition): void">

```ts
register(triggerId: string, definition: MainTriggerDefinition): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| triggerId | `string` | Unique trigger identifier. |
| definition | <code>[`MainTriggerDefinition`](?id=maintriggerdefinition)</code> | Interval in ticks and callback to invoke. |

<div class="smt-member-anchors">

##### triggerId <!-- {docsify-ignore} -->

##### definition <!-- {docsify-ignore} -->

</div>

Register a repeating trigger with interval and callback.

#### Example

```ts
api.triggers.register("example:update", {
  intervalMs: 250,
  callback: (trigger, deltaTimeMs) => {
    updateExample(trigger, deltaTimeMs);
  },
});
```

</div>
