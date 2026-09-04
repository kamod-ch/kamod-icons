<p align="center">
  <img src="https://raw.githubusercontent.com/kamod-ch/kamod-icons/main/.github/assets/logo-kamod-icons-dark.svg#gh-light-mode-only" alt="Kamod Icons" width="280" />
  <img src="https://raw.githubusercontent.com/kamod-ch/kamod-icons/main/.github/assets/logo-kamod-icons-light.svg#gh-dark-mode-only" alt="Kamod Icons" width="280" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@kamod-ch/icons"><img src="https://img.shields.io/npm/v/%40kamod-ch%2Ficons" alt="npm version" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml"><img src="https://github.com/kamod-ch/kamod-icons/actions/workflows/gh-pages.yml/badge.svg" alt="Docs deploy" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/stargazers"><img src="https://img.shields.io/github/stars/kamod-ch/kamod-icons?style=social" alt="GitHub stars" /></a>
  <a href="https://github.com/kamod-ch/kamod-icons/blob/main/packages/core/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license" /></a>
</p>

<p align="center">
  <strong><a href="https://kamod-ch.github.io/kamod-icons/">Docs</a></strong> ·
  <strong><a href="https://www.npmjs.com/package/@kamod-ch/icons">npm</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons">GitHub</a></strong> ·
  <strong><a href="https://github.com/kamod-ch/kamod-icons/issues">Issues</a></strong>
</p>

# @kamod-ch/icons

Tree-shakeable Preact icon components for Kamod. The package contains multiple independent icon sets (`shadcn`, `lucide`, `heroicons`, `tabler`, `iconoir`) via stable subpath exports.

## Installation

```bash
npm install @kamod-ch/icons preact
```

`preact` is a peer dependency. There is no React runtime dependency.

## Usage

### Default set

The root export currently points to the `shadcn` set:

```tsx
import { SearchIcon } from "@kamod-ch/icons";

export function Example() {
  return <SearchIcon size={20} />;
}
```

### Explicit icon set

```tsx
import { SearchIcon } from "@kamod-ch/icons/shadcn";
import { SearchIcon as LucideSearchIcon } from "@kamod-ch/icons/lucide";
```

### Heroicons (outline and solid)

Heroicons are split into separate subpath exports, matching the upstream `outline` / `solid` layout:

```tsx
import { MagnifyingGlassIcon } from "@kamod-ch/icons/heroicons/outline";
import { MagnifyingGlassIcon as MagnifyingGlassSolidIcon } from "@kamod-ch/icons/heroicons/solid";
```

Raw SVGs live in variant subfolders:

```txt
raw/heroicons/outline/magnifying-glass.svg
raw/heroicons/solid/magnifying-glass.svg
```

### Tabler (outline and filled)

```tsx
import { SearchIcon } from "@kamod-ch/icons/tabler/outline";
import { SearchIcon as SearchFilledIcon } from "@kamod-ch/icons/tabler/filled";
```

Raw SVGs:

```txt
raw/tabler/outline/search.svg
raw/tabler/filled/search.svg
```

### Iconoir (regular and solid)

```tsx
import { SearchIcon } from "@kamod-ch/icons/iconoir/regular";
import { AlarmIcon as AlarmSolidIcon } from "@kamod-ch/icons/iconoir/solid";
```

Raw SVGs:

```txt
raw/iconoir/regular/search.svg
raw/iconoir/solid/alarm.svg
```

### Tailwind classes

```tsx
import { SearchIcon } from "@kamod-ch/icons/shadcn";

export function Example() {
  return (
    <button class="inline-flex items-center gap-2">
      <SearchIcon class="h-4 w-4 text-muted-foreground" />
      Search
    </button>
  );
}
```

### Accessibility title

Without `title`, icons are rendered with `aria-hidden`. Provide `title` for meaningful standalone icons:

```tsx
<SearchIcon title="Search" class="h-5 w-5" />
```

All icons use `currentColor`, accept `class`, `style`, `size`, `title`, and normal SVG props. `size` sets both `width` and `height`.

## Adding new Figma SVGs

1. Export SVGs from Figma.
2. Put them into the matching raw folder, for example:

   ```txt
   raw/shadcn/search.svg
   raw/shadcn/calendar-days.svg
   ```

3. Generate components:

   ```bash
   npm run icons:generate
   ```

   Or generate one set only:

   ```bash
   npm run icons:generate -- --set shadcn
   ```

4. Build the package:

   ```bash
   npm run build
   ```

File names are converted to PascalCase with an `Icon` suffix, e.g. `arrow-left.svg` becomes `ArrowLeftIcon`.

## Adding another icon set

The package already contains raw and source folders plus subpath exports for:

- `shadcn`
- `lucide`
- `heroicons`
- `tabler`
- `iconoir`

To add icons to one of these sets, place SVG files in `raw/<set-name>/` and run the generator. Heroicons use variant subfolders (`raw/heroicons/outline/`, `raw/heroicons/solid/`) and export via `@kamod-ch/icons/heroicons/outline` and `@kamod-ch/icons/heroicons/solid`. Tabler uses `outline` / `filled`; Iconoir uses `regular` / `solid`. To add a brand-new set later, add:

1. `raw/<set-name>/`
2. `src/sets/<set-name>/index.ts`
3. a matching subpath export in `package.json`
4. an entry in `tsup.config.ts`

Keep set-specific imports to avoid naming conflicts between icon sets.

## Icon sources

Each bundled set tracks its upstream npm package in `icon-sources.json`. Sync raw SVGs from upstream, regenerate components, then build:

```bash
npm run icons:sync
npm run icons:generate
npm run build
```

Sync one set only:

```bash
npm run icons:sync -- --set heroicons
```

Read tracked metadata at runtime:

```tsx
import { iconSources } from "@kamod-ch/icons/meta";

console.log(iconSources.heroicons.upstream.version);
```

See `ATTRIBUTION.md` for upstream licenses and repositories.

## Animated Lucide icons (preview)

> **API status:** Preview / not stable. **24 curated MVP icons** ship under `@kamod-ch/icons/lucide/animated`. Browser support is validated by Playwright smoke and visual tests — see [Browser support](#browser-support-animated) below.

Animated icons use the Web Animations API via Preact. They are **not** exported from the root barrel or `@kamod-ch/icons/lucide`, so static icon imports do not pull animation runtime.

### Import

```tsx
import {
  AnimateIcon,
  BellAnimatedIcon,
  SearchAnimatedIcon,
  type AnimatedIconProps,
} from "@kamod-ch/icons/lucide/animated";
```

Available components (24): navigation (`ArrowRight`, `ArrowLeft`, `ChevronDown`, `ChevronUp`, `Menu`, `X`), actions (`Search`, `Check`, `Plus`, `Minus`, `Copy`, `Download`, `Upload`, `RefreshCw`, `Settings`, `Bell`, `Trash2`, `Play`), state (`Lock`, `LockOpen`, `Eye`, `EyeOff`, `Heart`), and `LoaderCircle`.

Metadata (`componentName`, `iconName`, `variants`, `intent`, `loopCapable`) is generated from Kamod animated sources via `pnpm run animated:meta` — not from upstream Lucide sync.

### Per-icon subpaths

Per-icon subpaths (for example `@kamod-ch/icons/lucide/animated/search`) are **not** published in this step. The animated entry is a single ESM barrel with `sideEffects: false`; bundlers tree-shake unused icon components reliably. Adding six hand-maintained export entries would duplicate the barrel without measurable gain at this scale.

### Props

Animated icons extend the usual icon props (`size`, `class`, `title`, …) with:

| Prop | Purpose |
| --- | --- |
| `animate` | Play immediately (`true`) or a named variant |
| `animateOnHover` / `animateOnFocus` / `animateOnPress` | Trigger on interaction |
| `animateOnView` | Play when visible (Intersection Observer) |
| `loop` / `loopDelay` / `delay` | Timing control |
| `persistOnEnd` | Keep final keyframe state |
| `triggerTarget` | Where to attach listeners: `"self"`, `"parent"`, or `closest:selector` |
| `reducedMotion` | `"system"` (default), `"always"`, or `"never"` |

### Reduced motion

When `reducedMotion="system"` and the user prefers reduced motion, animations are skipped and icons render in their static end state.

### Group control with `AnimateIcon`

Wrap multiple animated icons to share triggers and programmatic control:

```tsx
import { AnimateIcon, BellAnimatedIcon, SearchAnimatedIcon } from "@kamod-ch/icons/lucide/animated";

export function Toolbar() {
  return (
    <AnimateIcon animateOnHover>
      <SearchAnimatedIcon size={20} />
      <BellAnimatedIcon size={20} />
    </AnimateIcon>
  );
}
```

`AnimateIcon` renders a `span[data-kamod-animate-icon]` wrapper and provides context so child icons inherit group animation settings unless overridden.

### Browser support (animated)

Automated checks run via `pnpm test:browser` in `packages/core` (Playwright):

| Engine | Smoke (hover, focus, reduced motion) | Visual regression |
| --- | --- | --- |
| Chromium | ✓ CI / local | ✓ baseline snapshots |
| Firefox | ✓ when Playwright Firefox is installed | ✓ when installed |
| WebKit (Safari) | ✓ when Playwright WebKit is installed | ✓ when installed |

Requirements: built `dist/lucide/animated`, Web Animations API, `IntersectionObserver` for `animateOnView`, and `matchMedia('(prefers-reduced-motion: reduce)')` for system reduced motion.

Run the full release-candidate gate from the repo root:

```bash
pnpm release:rc-check
```

This does **not** publish to npm.
