---
title: Usage
description: Import, alias, style, and compose @kamod/icons components in Preact.
---

import "../components/icons-docs.css";

# Usage

Icons are typed Preact components. They accept `class`, `style`, `size`, `title`, and standard SVG props.

## Recommended import

Use explicit set imports in applications, component libraries, and documentation examples:

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";
```

This makes the source clear and avoids surprises when more sets are added.

## Root import

The root import points to the preferred default set. Today that is `shadcn`:

```tsx
import { SearchIcon } from "@kamod/icons";
```

Use it for quick prototypes or examples where the default set is acceptable.

## Alias icons from multiple sets

Different sets can export the same component name. Alias at import time when you compare or combine sets:

```tsx
import { SearchIcon as ShadcnSearchIcon } from "@kamod/icons/shadcn";
import { SearchIcon as LucideSearchIcon } from "@kamod/icons/lucide";
```

## Style with classes or props

Icons use `currentColor`, so color is inherited from CSS or utility classes.

```tsx
<SearchIcon class="h-4 w-4 text-muted-foreground" />
<SearchIcon size={20} class="text-foreground" />
<SearchIcon strokeWidth={1.5} />
```

Use Preact-compatible SVG prop names. `strokeWidth` is safer than `stroke-width` in JSX examples.

## Common UI patterns

Button with text:

```tsx
<button class="inline-flex items-center gap-2">
  <SearchIcon class="h-4 w-4" />
  Search
</button>
```

Input adornment:

```tsx
<div class="relative">
  <SearchIcon class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <input class="pl-9" placeholder="Search..." />
</div>
```

Status label:

```tsx
<span class="inline-flex items-center gap-2 text-green-700">
  <CheckIcon class="h-4 w-4" />
  Synced
</span>
```

## Checklist

- Use explicit subpath imports for stable application code.
- Keep decorative icons unlabeled.
- Add `aria-label` to icon-only controls.
- Use `currentColor` instead of hard-coded icon colors whenever possible.
