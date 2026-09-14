# sandkit.api.main (worker)

**`Internal`**

Worker thread only.

`sandkit.api.main` — send events to the main thread.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md?id=workersandkitapi). Main thread has a
larger `sandkit.api` surface; do not assume parity.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.main.emitEvent :id=emitevent

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/main.d.ts#L15" target="_blank" rel="noopener">main.d.ts:15</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.main.emitEvent&lt;Payload = any&gt;(eventId: string, payload: Payload): void">

```ts
sandkit.api.main.emitEvent<Payload = any>(eventId: string, payload: Payload): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `string` | Registered event name. |
| payload | `Payload` | Serializable payload passed to main-thread listeners. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### payload <!-- {docsify-ignore} -->

</div>

Emit a custom event on the main thread.

`Payload` = `any`

</div>
