---
title: Theming
description: Style @kamod/icons with currentColor, CSS and Tailwind.
---

# Theming

`@kamod/icons` uses `currentColor`. The icon inherits its color from the CSS `color` property, just like text.

```tsx
<SearchIcon class="text-zinc-500" />
<SearchIcon class="text-red-600" />
<SearchIcon class="text-primary" />
```

## Inherit from a parent

```tsx
<div class="text-muted-foreground">
  <SearchIcon class="h-5 w-5" />
</div>
```

This is useful for grouped UI where icon and text should share the same token.

## Button state

```tsx
<button class="inline-flex items-center gap-2 text-primary">
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
```

```tsx
<SearchIcon class="icon-muted" />
```

## Size

Use CSS classes or the `size` prop:

```tsx
<SearchIcon class="h-4 w-4" />
<SearchIcon size={20} />
```
