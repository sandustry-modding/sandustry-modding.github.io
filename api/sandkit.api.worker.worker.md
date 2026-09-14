# sandkit.api.worker (worker)

**`Internal`**

Worker thread only.

`sandkit.api.worker` — identity of the current simulation worker.

 Base shape reused by [WorkerSandkitApi](api/sandkit.api.worker.md?id=workersandkitapi). Not the same as
main-thread APIs.

## Functions <!-- {docsify-ignore} -->

<div class="smt-member-card">

### sandkit.api.worker.getIndex :id=getindex

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L14" target="_blank" rel="noopener">worker.d.ts:14</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.worker.getIndex(): number">

```ts
getIndex(): number
```

</div>

Return the zero-based index of this worker in the worker pool.

Worker index (`0` … `getCount() - 1`).

</div>

<div class="smt-member-card">

### sandkit.api.worker.getCount :id=getcount

<p class="smt-member-badge"><a href="https://github.com/sandustry-modding/SandustryTypes/blob/main/src/worker/api/worker.d.ts#L19" target="_blank" rel="noopener">worker.d.ts:19</a></p>

<div class="smt-member-sig" data-sig="sandkit.api.worker.getCount(): number">

```ts
getCount(): number
```

</div>

Return the total number of simulation workers.

Worker count for the active simulation.

</div>
