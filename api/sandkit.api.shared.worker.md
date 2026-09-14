# sandkit.api.shared (worker)

SharedArrayBuffer storage for data shared between main and worker threads.

- [sandkit.api.shared.buffers](api/sandkit.api.shared.buffers.worker.md)

**`Internal`**

Worker thread only.

`sandkit.api.shared` — shared memory buffers for workers.

Workers **require** buffers created on the main thread. Main thread only
**gets** existing buffers. See shared for the shared base declarations.

 Worker extension of shared; not interchangeable with
main-thread `sandkit.api.shared`.
