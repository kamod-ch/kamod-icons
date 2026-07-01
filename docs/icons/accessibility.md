---
title: Accessibility
description: Make @kamod/icons decorative or accessible by title.
---

# Accessibility

Icons are decorative by default. That is the correct behavior when the icon repeats nearby text, for example a search icon inside a button that already says “Search”.

```tsx
<SearchIcon class="h-4 w-4" />
```

Without `title`, generated icons are hidden from assistive technology.

## Meaningful icons

When an icon carries meaning on its own, provide a `title`:

```tsx
<SearchIcon title="Search" class="h-4 w-4" />
```

Use this for icon-only buttons, status indicators or standalone visual labels.

## Decorative vs meaningful

Decorative icon:

```tsx
<button class="inline-flex items-center gap-2">
  <SearchIcon class="h-4 w-4" />
  Search
</button>
```

Meaningful icon-only button:

```tsx
<button aria-label="Search">
  <SearchIcon title="Search" class="h-4 w-4" />
</button>
```

For controls, prefer a clear `aria-label` on the control itself. The icon `title` can help when the SVG is consumed outside a labeled control.
