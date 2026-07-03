---
title: Installation
description: Install @kamod/icons and render your first Preact icon in minutes.
---

`@kamod/icons` ships typed SVG icons as Preact components. It is independent from `kamod-ui`, has no React runtime dependency, and only expects Preact as a peer dependency.

## Install the package

> Prerequisite: use Preact 10 or newer in the app or package that renders the icons.

```bash
npm install @kamod/icons
```

Workspace install:

```bash
npm install @kamod/icons --workspace your-app
```

Package-manager equivalents:

```bash
pnpm add @kamod/icons
bun add @kamod/icons
yarn add @kamod/icons
```

## Render your first icon

Prefer an explicit set import for production code. It keeps the icon source visible and protects you from future default-set changes.

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

## Verify bundling

The package uses ESM and `sideEffects: false`, so modern bundlers can tree-shake unused icons.

- Import from a subpath such as `@kamod/icons/shadcn`.
- Avoid importing a whole set namespace when you only need a few icons.
- Keep icons close to the UI component that uses them.

## Next steps

- Learn the [usage patterns](/icons/usage).
- Choose an [icon set](/icons/icon-sets).
