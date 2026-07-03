---
title: Theming
description: Style @kamod/icons with currentColor, CSS variables, utility classes, and design tokens.
---

import "../components/icons-docs.css";

# Theming

`@kamod/icons` uses `currentColor`. Icons inherit the CSS `color` property just like text, so they naturally follow your theme tokens.

```tsx
<SearchIcon class="text-zinc-500" />
<SearchIcon class="text-red-600" />
<SearchIcon class="text-primary" />
```

## Inherit from a parent

Set color on a wrapper when icon and text should share the same semantic color.

```tsx
<div class="inline-flex items-center gap-2 text-muted-foreground">
  <SearchIcon class="h-5 w-5" />
  Search results
</div>
```

## Style interactive states

Let the button, link, or menu item own the state color. The icon will follow automatically.

```tsx
<button class="inline-flex items-center gap-2 text-primary hover:text-primary/80">
  <CheckIcon class="h-4 w-4" />
  Saved
</button>
```

## CSS without Tailwind

```css
.icon-muted {
  width: 1rem;
  height: 1rem;
  color: var(--muted-foreground);
}

.icon-danger {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-danger);
}
```

```tsx
<SearchIcon class="icon-muted" />
<AlertCircleIcon class="icon-danger" />
```

## Size icons consistently

Use utility classes when icons should align with surrounding UI, or the `size` prop for one-off values.

```tsx
<SearchIcon class="h-4 w-4" />
<SearchIcon size={20} />
```

## Stroke width

Line icon sets can usually be tuned with SVG stroke props:

```tsx
<SearchIcon strokeWidth={1.75} class="h-5 w-5" />
```

Keep stroke width consistent within one component or navigation area so icons feel like one system.
