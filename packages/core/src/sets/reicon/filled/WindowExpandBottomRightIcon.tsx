import type { IconProps } from "../../../shared/types";

export function WindowExpandBottomRightIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M13.333 3.667a1 1 0 0 0 1 1h3.334c.919 0 1.666.747 1.666 1.666v11.334c0 .919-.747 1.666-1.666 1.666H6.333a1.667 1.667 0 0 1-1.666-1.666v-3.334a1 1 0 0 0-2 0v3.334a3.67 3.67 0 0 0 3.666 3.666h11.334a3.67 3.67 0 0 0 3.666-3.666V6.333a3.67 3.67 0 0 0-3.666-3.666h-3.334a1 1 0 0 0-1 1Z"/><path d="M8.333 2.667h-2a3.667 3.667 0 0 0-3.666 3.666v2A3.667 3.667 0 0 0 6.333 12h2A3.667 3.667 0 0 0 12 8.333v-2a3.667 3.667 0 0 0-3.667-3.666Zm3.627 9.293a1 1 0 0 0 0 1.414l1.96 1.96h-1.587a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v1.585l-1.96-1.96a1 1 0 0 0-1.413 0Z"/></g>
    </svg>
  );
}
