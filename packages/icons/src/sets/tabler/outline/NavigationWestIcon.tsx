import type { IconProps } from "../../../shared/types";

export function NavigationWestIcon({
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
      <path d="m9 3 1 6 2-3.75L14 9l1-6m1 18-4-8-4 8 4-2z"/>
    </svg>
  );
}
