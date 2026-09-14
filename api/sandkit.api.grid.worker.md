# sandkit.api.grid (worker)

**`Internal`**

Worker-thread `sandkit.api.grid` — grid reads, activity, and excavation.

Worker mutations are immediate. Main thread defers grid writes through `api.grid.mutate`.

 Worker subset; do not import main-thread [sandkit.api.grid](api/sandkit.md?id=grid) iteration helpers here.
