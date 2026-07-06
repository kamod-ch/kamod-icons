import type { IconProps } from "../../../shared/types";

export function NavigationSouthIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 8.25c0 .414.336.75.75.75H13a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.25a.75.75 0 0 1 .75.75M16 21l-4-8-4 8 4-2z"/>
    </svg>
  );
}
