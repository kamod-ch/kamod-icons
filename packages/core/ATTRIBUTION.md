# Attribution

`@kamod-ch/icons` vendors SVG sources from upstream icon libraries and converts them into Preact components. The table below lists the upstream packages, versions, and licenses tracked in `icon-sources.json`.

| Set | Upstream package | Version | License | Repository |
| --- | --- | --- | --- | --- |
| shadcn | `lucide` / `lucide-static` | see `icon-sources.json` | ISC | https://github.com/lucide-icons/lucide |
| lucide | `lucide` / `lucide-static` | see `icon-sources.json` | ISC | https://github.com/lucide-icons/lucide |
| heroicons | `heroicons` / `@heroicons/react` | see `icon-sources.json` | MIT | https://github.com/tailwindlabs/heroicons |
| tabler | `@tabler/icons` | see `icon-sources.json` | MIT | https://github.com/tabler/tabler-icons |
| iconoir | `iconoir` | see `icon-sources.json` | MIT | https://github.com/iconoir-icons/iconoir |
| iconmind | `@iconmind/icons` (outline regular) | see `icon-sources.json` | MIT | https://github.com/iconmind/iconmind |
| reicon | `dqev/reicon` | see `icon-sources.json` | MIT | https://github.com/dqev/reicon |

## IconMind note

Kamod packages IconMind's 5,287 `outline-regular` SVG cells as typed Preact components. IconMind's alternate duotone and thin/bold cells are not duplicated here and remain available from the upstream IconMind packages.

## shadcn/ui note

There is no separate npm package called "shadcn icons". The `@kamod-ch/icons/shadcn` set is a Lucide-based subset with legacy icon names commonly used in shadcn/ui projects.

## Sync workflow

Upstream SVGs are copied into `raw/<set>/` with:

```bash
npm run icons:sync
npm run icons:generate
npm run build
```

Programmatic access to the tracked metadata:

```ts
import { iconSources } from "@kamod-ch/icons/meta";
```

## License

The `@kamod-ch/icons` package code is part of the Kamod project. Upstream icon libraries remain under their respective licenses listed above.

## Animated Lucide geometry

The `@kamod-ch/icons/lucide/animated` entry ships **Kamod-authored animation recipes** applied to **Lucide ISC-licensed SVG path geometry**. Static path data is derived from the same Lucide sources tracked in `icon-sources.json` (`lucide` / `lucide-static`). Keyframes, timing, and trigger wiring are implemented in this repository and are **not** copied from third-party animation libraries.

When redistributing or documenting animated icons, attribute Lucide as the underlying icon set:

> Icon geometry from [Lucide](https://lucide.dev) (ISC License). Animations © Kamod.

