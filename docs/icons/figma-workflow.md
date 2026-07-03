---
title: Figma Workflow
description: Prepare, export, and generate SVG icons from Figma for @kamod/icons.
---

import "../components/icons-docs.css";

# Figma Workflow

New icons start as clean SVG exports and are generated into typed Preact components.

```txt
Figma
  ↓ SVG export
raw/<set>/*.svg
  ↓ npm run icons:generate
src/sets/<set>/*.tsx
  ↓ npm run build
dist/*
```

## Export checklist

Prepare icons in Figma with consistent geometry:

- Use a `24x24` frame unless the target set uses a different grid.
- Keep paths centered and visually balanced.
- Avoid masks when a simple path or compound path works.
- Do not use raster images.
- Avoid fixed brand colors for UI icons.
- Export black paths or shapes that can become `currentColor`.
- Keep stroke width consistent inside one set.
- Use clear file names like `arrow-left.svg`.

The generator converts file names to PascalCase components with an `Icon` suffix. For example, `arrow-left.svg` becomes `ArrowLeftIcon`.

## Add icons to a set

```bash
cp ~/Downloads/figma-icons/*.svg packages/icons/raw/shadcn/
cd packages/icons
npm run icons:generate
npm run build
```

Generate one set only while iterating:

```bash
npm run icons:generate -- --set shadcn
```

## Review generated output

Before opening a pull request:

- Check that generated component names are readable.
- Confirm icons inherit `currentColor`.
- Test at `16px`, `20px`, and `24px`.
- Verify that filled and outline variants are placed in the correct folder.
- Run the docs catalog generator if the docs browser should show new icons.

## Sync from upstream npm packages

To refresh vendored SVGs from upstream and update tracked versions in `icon-sources.json`:

```bash
npm run icons:sync
npm run icons:generate
npm run build
```

Sync one set only:

```bash
npm run icons:sync -- --set heroicons
```

## Folder conventions

Simple sets use one raw folder:

```txt
raw/shadcn/search.svg
raw/lucide/search.svg
```

Variant sets keep variants in subfolders:

```txt
raw/heroicons/outline/magnifying-glass.svg
raw/heroicons/solid/magnifying-glass.svg
raw/tabler/outline/search.svg
raw/tabler/filled/search.svg
raw/iconoir/regular/search.svg
raw/iconoir/solid/alarm.svg
```
