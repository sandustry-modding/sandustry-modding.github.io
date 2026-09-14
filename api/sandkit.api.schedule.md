# sandkit.api.schedule

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.schedule.nextTick :id=nexttick

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/sandkit/api/schedule.d.ts#L20" target="_blank" rel="noopener">schedule.d.ts:20</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.schedule.nextTick(callback: () =&gt; void): void">

```ts
nextTick(callback: () => void): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| callback | <code>() =&gt; `void`</code> | Function invoked once on the next tick. |

<div class="smt-member-anchors">

##### callback <!-- {docsify-ignore} -->

</div>

Run a callback on the next game tick.

#### Example

```ts
api.schedule.nextTick(() => {
  runDeferredWork();
});
```

</div>
