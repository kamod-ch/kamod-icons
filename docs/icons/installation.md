---
title: Installation
description: Install @kamod/icons and render your first Preact icon.
---

import "../components/icons-docs.css";

# Installation

`@kamod/icons` is independent from `kamod-ui`. It only needs Preact as a peer dependency and has no React runtime dependency.

```bash
npm install @kamod/icons
```

In a monorepo workspace, install it into the app or package that renders the icons:

```bash
npm install @kamod/icons --workspace your-app
```

## First icon

Use an explicit set import for stable long-term code:

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";

export function SearchButton() {
  return (
    <button class="inline-flex items-center gap-2">
      <SearchIcon class="h-4 w-4" />
      Search
    </button>
  );
}
```

## Notes

- Icons are exported as real Preact components.
- Imports are tree-shakeable when your bundler supports ESM tree shaking.
- The package can be used in PreactPress, Kamod UI or any Preact app.
