---
title: Figma Workflow
description: Add SVG icons from Figma to @kamod/icons.
---

# Figma Workflow

New icons start as SVG exports and are generated into typed Preact components.

```txt
Figma
  ↓ SVG export
raw/shadcn/*.svg
  ↓ npm run icons:generate
src/sets/shadcn/*.tsx
  ↓ npm run build
dist/*
```

## Export checklist

Prepare icons in Figma with consistent geometry:

- use a `24x24` frame
- keep paths centered
- avoid masks when possible
- do not use raster images
- avoid fixed brand colors for UI icons
- export black paths or shapes that can become `currentColor`
- keep stroke width consistent inside one set
- use clear file names like `arrow-left.svg`

The generator converts file names to PascalCase components with an `Icon` suffix. For example, `arrow-left.svg` becomes `ArrowLeftIcon`.

## Add icons to a set

```bash
cp ~/Downloads/figma-icons/*.svg packages/icons/raw/shadcn/
cd packages/icons
npm run icons:generate
npm run build
```

Generate one set only when iterating:

```bash
npm run icons:generate -- --set shadcn
```

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
