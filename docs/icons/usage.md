---
title: Usage
description: Import and style @kamod/icons components in Preact.
---

import "../components/icons-docs.css";

# Usage

Icons are typed Preact components. They accept `class`, `style`, `size`, `title` and normal SVG props.

## Default import

The root import points to the preferred default set. Today that is the `shadcn` set:

```tsx
import { SearchIcon } from "@kamod/icons";
```

This is convenient for examples and small apps.

## Explicit set import

For application code and libraries, prefer explicit set imports:

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";
```

Explicit imports are stable because they keep the icon source visible even when the package adds more sets later.

## Aliasing with multiple sets

When two sets export the same icon name, alias at import time:

```tsx
import { SearchIcon as ShadcnSearchIcon } from "@kamod/icons/shadcn";
import { SearchIcon as KamodSearchIcon } from "@kamod/icons/kamod";
```

## Styling

Icons use `currentColor`, so color comes from CSS or Tailwind text utilities.

```tsx
<SearchIcon class="h-4 w-4 text-muted-foreground" />
<SearchIcon size={20} class="text-foreground" />
<SearchIcon strokeWidth={1.5} />
```

Use Preact-compatible SVG prop names. This package uses typed `JSX.SVGAttributes`, so `strokeWidth` is the safest choice for JSX examples.

## Common patterns

```tsx
<button class="inline-flex items-center gap-2">
  <SearchIcon class="h-4 w-4" />
  Search
</button>
```

```tsx
<div class="relative">
  <SearchIcon class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
  <input class="pl-9" placeholder="Search..." />
</div>
```
