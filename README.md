



**[Live docs](https://kamod-ch.github.io/kamod-icons/)** · **[npm](https://www.npmjs.com/package/@kamod/icons)** · **[GitHub](https://github.com/kamod-ch/kamod-icons)** · **[Issues](https://github.com/kamod-ch/kamod-icons/issues)**

> If Kamod Icons saves you time, **[star the repo](https://github.com/kamod-ch/kamod-icons)** — it helps others discover the project.



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
pnpm install
```

The root package uses pnpm workspaces for `packages/*` and `docs`.

## Commands

```bash
pnpm run build          # build icons, then build the PreactPress docs
pnpm run build:icons    # build only @kamod/icons
pnpm run build:docs     # build only the docs site
pnpm run dev:docs       # start PreactPress locally
pnpm run dev:icons      # watch-build the icon package
pnpm run icons:sync     # copy upstream SVGs and update icon-sources.json
pnpm run icons:generate # generate Preact components from raw SVGs
pnpm run check:docs     # run PreactPress checks
pnpm run preview:docs   # preview the built docs
pnpm run clean          # remove icon dist and docs dist
```

## Local docs

```bash
pnpm install
pnpm run dev:docs
```

The docs live in `docs/icons/` and are configured in `docs/.preactpress/config.ts`.

## Build everything

```bash
pnpm run build
```

This runs:

1. `pnpm run build:icons`
2. `pnpm run build:docs`

The docs build depends on the icon package build because the package exports point to `packages/icons/dist/*`.

---



Built by Klaus Zahiragic  | Kamod GmbH

[Website](https://www.kamod.ch) ·
[LinkedIn](https://www.linkedin.com/in/klauszahiragic/)

