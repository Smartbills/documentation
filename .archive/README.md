# Archived docs

Content in this folder is intentionally **not published**. Mintlify skips
dot-prefixed directories, so nothing here is built or served.

## api-reference/ and fr/api-reference/

The public API reference was pulled from docs.smartbills.io because the
generated OpenAPI reference exposed the full endpoint surface.

Removed alongside these files:

- the `API Reference` / `Référence API` tabs in `docs.json` (en and fr)
- the `"openapi": "/api-reference/openapi.json"` entries on those tabs

`/api-reference/*` and `/fr/api-reference/*` now redirect to `/introduction`
and `/fr/introduction` via the catch-all rules at the end of `docs.json`.

### To restore

1. `git mv .archive/api-reference api-reference`
2. `git mv .archive/fr/api-reference fr/api-reference`
3. Re-add the two tabs to `docs.json` (see the commit that archived them)
4. Drop the two `/api-reference/:slug*` catch-all redirects
