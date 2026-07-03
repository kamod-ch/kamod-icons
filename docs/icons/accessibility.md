---
title: Accessibility
description: Decide when @kamod/icons should be decorative, labeled, or paired with control labels.
---

import "../components/icons-docs.css";

# Accessibility

Icons are decorative by default. That is the right behavior when nearby text already explains the action or status.

```tsx
<button class="inline-flex items-center gap-2">
  <SearchIcon class="h-4 w-4" />
  Search
</button>
```

Without `title`, generated icons are hidden from assistive technology.

## Meaningful standalone icons

When an icon carries meaning on its own, provide a `title`:

```tsx
<SearchIcon title="Search" class="h-4 w-4" />
```

Use this for standalone visual labels, status indicators, or exported SVGs that may be consumed outside a labeled control.

## Icon-only buttons

For controls, label the control itself. The button needs the accessible name because the button is the interactive element.

```tsx
<button aria-label="Search">
  <SearchIcon class="h-4 w-4" />
</button>
```

You may also add `title` to the icon, but do not rely on SVG title as the only label for a button.

## Decorative vs meaningful

| Situation | Recommendation |
| --- | --- |
| Icon next to visible text | No `title` needed |
| Icon-only button | Add `aria-label` to the button |
| Status icon without text | Add visible text or an icon `title` |
| Repeated visual decoration | Keep the icon decorative |

## Quick checklist

- Prefer visible text whenever possible.
- Label icon-only controls with `aria-label`.
- Keep redundant icons decorative.
- Avoid using color alone to communicate status.
