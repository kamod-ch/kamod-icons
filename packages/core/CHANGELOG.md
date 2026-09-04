# Changelog

All notable changes to `@kamod-ch/icons` are documented here.

## [1.1.0] - 2026-09-04

### Added

- **Animated Lucide icons (preview):** 24 curated MVP components under `@kamod-ch/icons/lucide/animated`.
- Preact-native Web Animations API runtime (`AnimateIcon`, triggers, reduced-motion handling).
- Generated metadata barrel (`animated:meta`, `animated:meta:check`) for catalog and docs.
- Browser smoke and visual regression tests (Playwright: Chromium, Firefox, WebKit when installed).
- Bundle size budgets for static icon, single animated icon, and full 24-icon barrel.
- Documentation page and live gallery in `@kamod-ch/icons-docs`.

### Changed

- README and `ATTRIBUTION.md` document animated geometry provenance and browser support matrix.
- Consumer QA fixture validates tarball boundary and tree-shaking.

### Notes

- Animated API remains **preview / not stable** for 1.1.x.
- Root export and `@kamod-ch/icons/lucide` do **not** re-export animated icons or runtime.

## [1.0.3] and earlier

See git history for static icon set releases.
