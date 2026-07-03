<p align="center">
  <img src=".github/assets/logo-kamod-icons-dark.svg#gh-light-mode-only" alt="Kamod Icons" width="280" />
  <img src=".github/assets/logo-kamod-icons-light.svg#gh-dark-mode-only" alt="Kamod Icons" width="280" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@kamod/icons"><img src="https://img.shields.io/npm/v/@kamod/icons" alt="npm version" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml"><img src="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml/badge.svg" alt="Docs deploy" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/stargazers"><img src="https://img.shields.io/github/stars/kamod-ch/kamod-icons?style=social" alt="GitHub stars" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" /></a>
</p>

<p align="center">
  <strong><a href="https://kamod-ch.github.io/kamod-icons/">Live docs</a></strong> ·
  <strong><a href="https://www.npmjs.com/package/@kamod/icons">npm</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons">GitHub</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons/issues">Issues</a></strong>
</p>

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

