<p align="center">
  <img src="assets/logo-kamod-icons-dark.svg" alt="Kamod Icons" width="280" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@kamod-ch/icons"><img src="https://img.shields.io/npm/v/%40kamod-ch%2Ficons" alt="npm version" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml"><img src="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml/badge.svg" alt="Docs deploy" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/stargazers"><img src="https://img.shields.io/github/stars/kamod-ch/kamod-icons?style=social" alt="GitHub stars" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/blob/main/packages/core/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" /></a>
</p>

<p align="center">
  <strong><a href="https://kamod-ch.github.io/kamod-icons/">Documentation</a></strong> ·
  <strong><a href="https://www.npmjs.com/package/@kamod-ch/icons">npm</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons">GitHub</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons/issues">Issues</a></strong>
</p>

# @kamod-ch/icons

Lightweight, typed, and tree-shakeable SVG icon components for Preact 11+. Choose from multiple independently importable icon sets without adding a React runtime dependency.

## Installation

```bash
npm install @kamod-ch/icons preact
```

Or with pnpm:

```bash
pnpm add @kamod-ch/icons preact
```

`preact >= 11` is a peer dependency.

## Quick start

```tsx
import { SearchIcon } from "@kamod-ch/icons/shadcn";

export function SearchButton() {
  return (
    <button class="inline-flex items-center gap-2">
      <SearchIcon size={20} aria-hidden="true" />
      Search
    </button>
  );
}
```

The root export currently maps to the Shadcn set, so this is equivalent:

```tsx
import { SearchIcon } from "@kamod-ch/icons";
```

Explicit subpath imports are recommended because they make the selected icon set clear and avoid naming conflicts.

## Icon sets

- `@kamod-ch/icons/shadcn`
- `@kamod-ch/icons/lucide`
- `@kamod-ch/icons/heroicons/outline`
- `@kamod-ch/icons/heroicons/solid`
- `@kamod-ch/icons/tabler/outline`
- `@kamod-ch/icons/tabler/filled`
- `@kamod-ch/icons/iconoir/regular`
- `@kamod-ch/icons/iconoir/solid`
- `@kamod-ch/icons/iconmind`
- `@kamod-ch/icons/reicon/outline`
- `@kamod-ch/icons/reicon/filled`

Example imports:

```tsx
import { SearchIcon as LucideSearchIcon } from "@kamod-ch/icons/lucide";
import { MagnifyingGlassIcon } from "@kamod-ch/icons/heroicons/outline";
import { SearchIcon as TablerSearchIcon } from "@kamod-ch/icons/tabler/outline";
import { AgentIcon, ContextWindowIcon, McpServerIcon } from "@kamod-ch/icons/iconmind";
```

IconMind includes 5,287 outline-regular icons for agents, LLMs, MCP, RAG, and related software. Alternate IconMind styles remain available from the upstream packages.

## Props and accessibility

All icons use `currentColor` and accept standard SVG props plus `size` and `title`:

```tsx
<SearchIcon size={20} class="text-slate-600" />
<SearchIcon size={20} title="Search" />
```

- `size` sets both `width` and `height`.
- Icons without a `title` are decorative and render with `aria-hidden`.
- A `title` gives a meaningful standalone icon an accessible name.
- Standard properties such as `class`, `style`, `strokeWidth`, and event handlers pass through to the SVG.

## Animated Lucide icons

> **Preview API:** Animated components are available in 2.0 but are not yet considered stable.

The separate animated entry point keeps animation runtime out of static-icon bundles:

```tsx
import {
  AnimateIcon,
  BellAnimatedIcon,
  SearchAnimatedIcon,
} from "@kamod-ch/icons/lucide/animated";

export function AnimatedActions() {
  return (
    <AnimateIcon animateOnHover>
      <SearchAnimatedIcon size={20} />
      <BellAnimatedIcon size={20} />
    </AnimateIcon>
  );
}
```

The 24 curated components support immediate, hover, focus, press, and viewport triggers as well as delays, looping, persisted end states, shared group control, and reduced-motion handling.

Common props include:

- `animate`: play immediately or select a named variant.
- `animateOnHover`, `animateOnFocus`, `animateOnPress`: interaction triggers.
- `animateOnView`: play when the icon becomes visible.
- `loop`, `loopDelay`, `delay`: timing controls.
- `persistOnEnd`: retain the final keyframe.
- `triggerTarget`: attach listeners to `self`, `parent`, or `closest:selector`.
- `reducedMotion`: use `system` (default), `always`, or `never`.

Animated icons rely on the Web Animations API. `animateOnView` additionally uses `IntersectionObserver`; system reduced-motion support uses `matchMedia`.

## Source metadata

Inspect the tracked upstream package and version for every bundled set:

```tsx
import { iconSources } from "@kamod-ch/icons/meta";

console.log(iconSources.heroicons.upstream.version);
```

See [`ATTRIBUTION.md`](https://github.com/kamod-ch/kamod-icons/blob/main/packages/core/ATTRIBUTION.md) for upstream repositories and licenses.

## Contributing icon sources

From the repository root:

```bash
pnpm icons:sync
pnpm icons:generate
pnpm build:icons
```

Sync or generate one set with `--set`:

```bash
pnpm icons:sync -- --set heroicons
pnpm icons:generate -- --set shadcn
```

SVG file names become PascalCase component names with an `Icon` suffix; for example, `arrow-left.svg` becomes `ArrowLeftIcon`.

## Development and release checks

```bash
pnpm test
pnpm typecheck
pnpm release:check
pnpm release:rc-check
```

The release-candidate check validates generated metadata, package boundaries, tree-shaking, bundle budgets, and browser behavior. It does not publish to npm.

## License

Kamod Icons is available under the [MIT License](https://github.com/kamod-ch/kamod-icons/blob/main/packages/core/LICENSE). Bundled icon sets retain their respective upstream licenses.
