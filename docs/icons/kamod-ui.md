---
title: Kamod UI Integration
description: Use @kamod/icons with kamod-ui without tight coupling.
---

import "../components/icons-docs.css";

# Kamod UI Integration

`@kamod/icons` is independent from `kamod-ui`. Kamod UI components can use these icons, but should not require this package unless a component explicitly needs it.

## Variante 1: Icon direkt verwenden

Use icons directly in app-level UI composition:

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";

export function SearchInput() {
  return (
    <div class="relative">
      <SearchIcon class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <input class="pl-9" placeholder="Search..." />
    </div>
  );
}
```

This keeps the icon decision close to the product UI.

## Variante 2: Icons als Props

For reusable components, accept icons as slots or props:

```tsx
import type { ComponentChildren } from "preact";

type ButtonProps = {
  icon?: ComponentChildren;
  children: ComponentChildren;
};

export function Button({ icon, children }: ButtonProps) {
  return (
    <button class="inline-flex items-center gap-2">
      {icon}
      {children}
    </button>
  );
}
```

Usage:

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";

<Button icon={<SearchIcon class="h-4 w-4" />}>
  Search
</Button>
```

This variant is more flexible because users can bring their own icon package or a different `@kamod/icons` set.
