---
title: Kamod UI Integration
description: Use @kamod/icons with Kamod UI while keeping components loosely coupled.
---

import "../components/icons-docs.css";

# Kamod UI Integration

`@kamod/icons` is independent from `kamod-ui`. Kamod UI components can use these icons, but reusable UI packages should avoid requiring one icon set unless the component explicitly depends on it.

## Option 1: Use icons at app level

Use icons directly in product composition when the icon choice belongs to the screen or feature.

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

This keeps visual decisions close to the product UI.

## Option 2: Accept icons as slots

Reusable components should accept icons as children, slots, or props.

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

This is more flexible because users can bring their own icon package or choose a different `@kamod/icons` set.

## Recommendation

- App code: import concrete icons directly.
- Reusable components: accept icons as slots or props.
- Documentation examples: use explicit subpath imports so examples stay clear.
