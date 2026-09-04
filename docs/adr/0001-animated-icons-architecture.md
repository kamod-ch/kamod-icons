# ADR 0001: Animated Lucide icons architecture

Status: Accepted for implementation  
Date: 2026-09-04

## Context

`@kamod-ch/icons` ships thousands of static Lucide and other icon sets as Preact SVG components. Kamod needs an animated icon extension that stays Preact-native, tree-shakeable, and legally distinct from third-party animated icon libraries.

The static library, its exports, and its Lucide sync pipeline must remain unchanged while animated icons are added alongside them.

## Decision

### Separate export subpath

Animated icons are exposed only through:

```txt
@kamod-ch/icons/lucide/animated
```

Existing static entrypoints (`@kamod-ch/icons`, `@kamod-ch/icons/lucide`, other sets) stay stable and are not repurposed for animation.

### Component naming

Each animated icon is a hand-authored Preact component named `{BaseName}AnimatedIcon`, for example `HeartAnimatedIcon` paired with the static `HeartIcon` geometry.

### Runtime: Web Animations API

Animation is driven by the browser Web Animations API (`Element.animate`, `Animation`, `KeyframeEffect`). The package does not use React, React DOM, `motion/react`, Framer Motion, Radix, or `preact/compat`.

### SSR: static SVG before mount

On the server and before client hydration, animated components render the same static SVG markup as their Lucide source geometry. Animation controllers attach only after mount in the browser.

### Reduced motion by default

Animated components respect `prefers-reduced-motion: reduce` by default and render or remain in the static end state without looping motion.

### Sync vs. animation authoring

Two pipelines stay separate:

1. **Static Lucide sync** — existing `icons:sync`, `icons:generate`, and `src/sets/lucide/*` generation from upstream SVGs.
2. **Animated components** — hand-designed in `src/sets/lucide/animated/*`, referencing Kamod Lucide geometry only.

Animated recipes are never produced by the Lucide generator and are never copied from Animate UI or other animated-icon projects (no files, keyframes, timings, variants, or controllers).

### Provenance metadata

Every animation recipe declares `source: "kamod"`. Upstream Lucide attribution remains in `ATTRIBUTION.md` and `icon-sources.json` for geometry only; motion design is Kamod-authored.

## Consequences

Positive:

- Static consumers keep current imports and bundle behavior.
- Animated icons are opt-in via a dedicated subpath.
- WAAPI keeps the runtime small and Preact-native.
- Clear legal and design boundary from third-party animated libraries.

Negative:

- Animated icons require manual design and maintenance per icon.
- WAAPI behavior must be tested across target browsers and SSR/hydration paths.
- Two code paths (generated static vs. hand-authored animated) must stay in sync when Lucide geometry changes.

## Verification

During implementation phases:

- Search source for forbidden imports: `react`, `react-dom`, `motion/react`, `framer-motion`, `@radix-ui/*`, `preact/compat`.
- Assert package exports for static paths are unchanged.
- Add SSR tests with `preact-render-to-string` for static SVG output before mount.
- Add DOM tests for WAAPI controller behavior after mount.
- Confirm animated metadata uses `source: "kamod"`.
