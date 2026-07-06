<p align="center">
  <img src="https://raw.githubusercontent.com/kamod-ch/kamod-icons/main/.github/assets/logo-kamod-icons-dark.svg" alt="Kamod Icons" width="280" />
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

# @kamod/icons

Tree-shakeable Preact icon components for Kamod. The package contains multiple independent icon sets (`shadcn`, `lucide`, `heroicons`, `tabler`, `iconoir`) via stable subpath exports.

## Installation

```bash
npm install @kamod/icons preact
```

`preact` is a peer dependency. There is no React runtime dependency.

## Usage

### Default set

The root export currently points to the `shadcn` set:

```tsx
import { SearchIcon } from "@kamod/icons";

export function Example() {
  return <SearchIcon size={20} />;
}
```

### Explicit icon set

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";
import { SearchIcon as LucideSearchIcon } from "@kamod/icons/lucide";
```

### Heroicons (outline and solid)

Heroicons are split into separate subpath exports, matching the upstream `outline` / `solid` layout:

```tsx
import { MagnifyingGlassIcon } from "@kamod/icons/heroicons/outline";
import { MagnifyingGlassIcon as MagnifyingGlassSolidIcon } from "@kamod/icons/heroicons/solid";
```

Raw SVGs live in variant subfolders:

```txt
raw/heroicons/outline/magnifying-glass.svg
raw/heroicons/solid/magnifying-glass.svg
```

### Tabler (outline and filled)

```tsx
import { SearchIcon } from "@kamod/icons/tabler/outline";
import { SearchIcon as SearchFilledIcon } from "@kamod/icons/tabler/filled";
```

Raw SVGs:

```txt
raw/tabler/outline/search.svg
raw/tabler/filled/search.svg
```

### Iconoir (regular and solid)

```tsx
import { SearchIcon } from "@kamod/icons/iconoir/regular";
import { AlarmIcon as AlarmSolidIcon } from "@kamod/icons/iconoir/solid";
```

Raw SVGs:

```txt
raw/iconoir/regular/search.svg
raw/iconoir/solid/alarm.svg
```

### Tailwind classes

```tsx
import { SearchIcon } from "@kamod/icons/shadcn";

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

To add icons to one of these sets, place SVG files in `raw/<set-name>/` and run the generator. Heroicons use variant subfolders (`raw/heroicons/outline/`, `raw/heroicons/solid/`) and export via `@kamod/icons/heroicons/outline` and `@kamod/icons/heroicons/solid`. Tabler uses `outline` / `filled`; Iconoir uses `regular` / `solid`. To add a brand-new set later, add:

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
import { iconSources } from "@kamod/icons/meta";

console.log(iconSources.heroicons.upstream.version);
```

See `ATTRIBUTION.md` for upstream licenses and repositories.
