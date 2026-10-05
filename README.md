<p align="center">
  <img src=".github/assets/logo-kamod-icons-dark.svg#gh-light-mode-only" alt="Kamod Icons" width="280" />
  <img src=".github/assets/logo-kamod-icons-light.svg#gh-dark-mode-only" alt="Kamod Icons" width="280" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@kamod-ch/icons"><img src="https://img.shields.io/npm/v/%40kamod-ch%2Ficons" alt="npm version" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml"><img src="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml/badge.svg" alt="Docs deploy" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/stargazers"><img src="https://img.shields.io/github/stars/kamod-ch/kamod-icons?style=social" alt="GitHub stars" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" /></a>
</p>

<p align="center">
  <strong><a href="https://kamod-ch.github.io/kamod-icons/">Documentation</a></strong> ·
  <strong><a href="https://www.npmjs.com/package/@kamod-ch/icons">npm</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons/issues">Issues</a></strong>
</p>

# Kamod Icons

Monorepo for [`@kamod-ch/icons`](https://www.npmjs.com/package/@kamod-ch/icons), a lightweight and tree-shakeable SVG icon library for Preact, and its PreactPress documentation.

The package provides typed Preact components through stable subpath exports for Shadcn, Lucide, Heroicons, Tabler, Iconoir, IconMind, and Reicon. Animated Lucide icons are available through a separate preview entry point.

## Quick start

```bash
npm install @kamod-ch/icons preact
```

```tsx
import { SearchIcon } from "@kamod-ch/icons/shadcn";

export function SearchButton() {
  return <SearchIcon size={20} title="Search" />;
}
```

See the [package README](packages/core/README.md) for all icon sets, accessibility guidance, and animated-icon usage.

## Repository structure

```text
packages/core/  # @kamod-ch/icons, SVG sources, generator, tests, and build output
packages/docs/  # PreactPress documentation site
scripts/        # release and repository automation
```

## Development

Requires Node.js and pnpm.

```bash
pnpm install
pnpm build
```

Useful commands:

```bash
pnpm build:icons       # build @kamod-ch/icons
pnpm build:docs        # build the documentation site
pnpm dev:icons         # watch the icon package
pnpm docs:dev          # start the local documentation site
pnpm docs:preview      # preview the built documentation
pnpm icons:sync        # sync tracked upstream SVG packages
pnpm icons:generate    # generate typed Preact components
pnpm test              # run package tests
pnpm typecheck         # run TypeScript checks
pnpm release:check     # build packages and validate the docs
```

## Publishing

The workspace root is private and cannot be published. Releases publish only `packages/core` as `@kamod-ch/icons`.

```bash
pnpm pack:core
pnpm publish:core
```

## License and attribution

Kamod Icons is available under the [MIT License](LICENSE). Each bundled icon set retains its upstream license; see [`packages/core/ATTRIBUTION.md`](packages/core/ATTRIBUTION.md).

---

Built by [Klaus Zahiragic](https://www.linkedin.com/in/klauszahiragic/) · [Kamod GmbH](https://www.kamod.ch)
