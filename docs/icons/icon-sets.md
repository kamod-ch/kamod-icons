---
title: Icon Sets
description: Understand @kamod/icons subpath exports for multiple icon sets.
pageClass: kamod-icons-home
markdownStyles: false
---

import "../components/icons-docs.css";
import IconSourcesTable from "../components/IconSourcesTable.tsx";

# Icon Sets

`@kamod/icons` is designed for more than one icon family. Sets are exposed through subpath exports so each source stays separated.

```txt
@kamod/icons/shadcn
@kamod/icons/lucide
@kamod/icons/heroicons/outline
@kamod/icons/heroicons/solid
@kamod/icons/tabler/outline
@kamod/icons/tabler/filled
@kamod/icons/kamod
```

`@kamod/icons/kamod` is the intended home for future custom Kamod icons. Add it when the package contains that set and a matching package export.

## Why subpath exports?

Subpath exports make icon usage predictable:

- no hidden name conflicts between sets
- clear origin for every imported icon
- stable imports for long-lived apps
- simple extension when new sets are added
- better package maintenance and generated output

## Example

```tsx
import { CheckIcon } from "@kamod/icons/shadcn";

export function SavedLabel() {
  return (
    <span class="inline-flex items-center gap-2 text-primary">
      <CheckIcon class="h-4 w-4" />
      Saved
    </span>
  );
}
```

## Root import vs set import

The root import points to the preferred default set:

```tsx
import { SearchIcon } from "@kamod/icons";
```

Use it when you want the package default. Use explicit subpaths when API stability matters:

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";
```

## Upstream versions

Each set vendors SVGs from an upstream npm package. Versions, icon counts and last sync dates are tracked in `icon-sources.json` and exposed through `@kamod/icons/meta`.

<IconSourcesTable />

### Sync from upstream

```bash
npm run icons:sync
npm run icons:generate
npm run build
```

Sync one set only:

```bash
npm run icons:sync -- --set lucide
```

The `shadcn` set is a Lucide subset with legacy icon names used by shadcn/ui. It refreshes only the SVG files that already exist in `raw/shadcn/`.
