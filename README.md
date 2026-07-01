# Kamod Icons

Monorepo for `@kamod/icons` and the PreactPress documentation site.

`@kamod/icons` is a lightweight, tree-shakeable icon package for Preact, Kamod UI, PreactPress and other modern Preact apps. Icons are exported as typed Preact components and are grouped by stable subpath exports such as `@kamod/icons/shadcn`.

## Structure

```txt
packages/icons/   # @kamod/icons package, generator, raw SVGs and source icons
docs/             # PreactPress documentation site
```

## Install

Install dependencies from the repository root:

```bash
npm install
```

The root package uses npm workspaces for `packages/*` and `docs`.

## Commands

```bash
npm run build          # build icons, then build the PreactPress docs
npm run build:icons    # build only @kamod/icons
npm run build:docs     # build only the docs site
npm run dev:docs       # start PreactPress locally
npm run dev:icons      # watch-build the icon package
npm run icons:sync       # copy upstream SVGs and update icon-sources.json
npm run icons:generate   # generate Preact components from raw SVGs
npm run check:docs     # run PreactPress checks
npm run preview:docs   # preview the built docs
npm run clean          # remove icon dist and docs dist
```

## Local docs

```bash
npm install
npm run dev:docs
```

The docs live in `docs/icons/` and are configured in `docs/.preactpress/config.ts`.

## Build everything

```bash
npm run build
```

This runs:

1. `npm run build --workspace @kamod/icons`
2. `npm run build --workspace @kamod/icons-docs`

The docs build depends on the icon package build because the package exports point to `packages/icons/dist/*`.

## Add icons from Figma

```bash
cp ~/Downloads/figma-icons/*.svg packages/icons/raw/shadcn/
npm run icons:generate
npm run build:icons
```

File names are converted to PascalCase with an `Icon` suffix, e.g. `arrow-left.svg` becomes `ArrowLeftIcon`.

## Edit the documentation

- Navigation: `docs/.preactpress/config.ts`
- Icons overview page: `docs/icons/index.md`
- Home page component: `docs/components/IconsHome.tsx`
- Preview grid: `docs/components/IconGrid.tsx`
- Visual styling: `docs/components/icons-docs.css`
