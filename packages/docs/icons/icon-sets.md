---
title: Icon Sets
description: Choose the right @kamod-ch/icons subpath export for each project.
---

`@kamod-ch/icons` groups every upstream family behind explicit subpath exports. This keeps imports readable, avoids name collisions, and makes upgrades easier to review.

## Available imports

```txt
@kamod-ch/icons
@kamod-ch/icons/shadcn
@kamod-ch/icons/lucide
@kamod-ch/icons/heroicons/outline
@kamod-ch/icons/heroicons/solid
@kamod-ch/icons/tabler/outline
@kamod-ch/icons/tabler/filled
@kamod-ch/icons/iconoir/regular
@kamod-ch/icons/iconoir/solid
```

The root import currently maps to the preferred `shadcn` set. For long-lived app code, prefer explicit subpaths.

## Choosing a set

| Set | Best for |
| --- | --- |
| `shadcn` | App UI based on shadcn-style icon names |
| `lucide` | Lightweight line icons and broad UI coverage |
| `heroicons` | Friendly dashboard, marketing, and app icons |
| `tabler` | Large product surfaces, admin tools, and dense UIs |
| `iconoir` | Distinctive geometric product moments |

## Why subpath exports?

- Clear origin for every imported icon.
- No hidden name conflicts between sets.
- Stable imports for long-lived apps and libraries.
- Variant support for outline/solid or regular/solid families.
- Smaller generated entry points that are easier to maintain.

## Example

```tsx
import { CheckIcon } from "@kamod-ch/icons/shadcn";

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

```tsx
import { SearchIcon } from "@kamod-ch/icons";
```

Use the root import when you intentionally accept the package default. Use explicit subpaths when API stability matters:

```tsx
import { SearchIcon } from "@kamod-ch/icons/shadcn";
```

## Upstream versions

Each set vendors SVGs from an upstream npm package. Versions, icon counts, and sync dates are tracked in `icon-sources.json` and exposed through `@kamod-ch/icons/meta`.

| Set | Upstream | Version | Icons | Last sync |
| --- | --- | --- | ---: | --- |
| `@kamod-ch/icons/shadcn` | [shadcn/ui](https://github.com/lucide-icons/lucide) | `lucide-static` (`lucide@1.23.0`) | 877 | 2026-07-03 |
| `@kamod-ch/icons/lucide` | [Lucide](https://github.com/lucide-icons/lucide) | `lucide-static` (`lucide@1.23.0`) | 1,994 | 2026-07-03 |
| `@kamod-ch/icons/heroicons/…` | [Heroicons](https://github.com/tailwindlabs/heroicons) | `heroicons` (`@heroicons/react@2.2.0`) | 648 | 2026-07-03 |
| `@kamod-ch/icons/tabler/…` | [Tabler Icons](https://github.com/tabler/tabler-icons) | `@tabler/icons@3.44.0` | 6,146 | 2026-07-03 |
| `@kamod-ch/icons/iconoir/…` | [Iconoir](https://github.com/iconoir-icons/iconoir) | `iconoir@7.11.1` | 1,671 | 2026-07-03 |

## Sync from upstream

```bash
npm run icons:sync
npm run icons:generate
npm run build
```

Sync one set only:

```bash
npm run icons:sync -- --set lucide
```

The `shadcn` set is a Lucide subset with legacy icon names used by shadcn/ui. During the latest sync, 860 of 877 existing SVGs were refreshed from `lucide-static`; 17 legacy brand icons were not present upstream and were left unchanged.
