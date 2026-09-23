# sandkit.api.main (worker)

**`Internal`**

Worker thread only.

`sandkit.api.main` — send events to the main thread.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md?id=workersandkitapi). Main thread has a
larger `sandkit.api` surface; do not assume parity.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.main.emitEvent :id=emitevent

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/main.d.ts#L17" target="_blank" rel="noopener">main.d.ts:17</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.main.emitEvent&lt;K *extends* EventId&gt;(eventId: K, payload: EventPayload&lt;K&gt;): void">

```ts
sandkit.api.main.emitEvent<K *extends* EventId>(eventId: K, payload: EventPayload<K>): void
```

</div>

| Argument | Type | Description |
| --- | --- | --- |
| eventId | `K` | Main-thread event name (known ids or a custom string). |
| payload | <code>[`EventPayload`](api/sandkit.api.events.md?id=eventpayload)&lt;`K`&gt;</code> | Payload for that event. Custom ids use `unknown`. |

<div class="smt-member-anchors">

##### eventId <!-- {docsify-ignore} -->

##### payload <!-- {docsify-ignore} -->

</div>

Emit an event on the main thread (`sandkit.api.events`).

`K` *extends* [`EventId`](api/sandkit.api.events.md?id=eventid)

</div>
