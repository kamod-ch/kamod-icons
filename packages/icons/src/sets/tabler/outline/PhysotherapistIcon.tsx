import type { IconProps } from "../../../shared/types";

export function PhysotherapistIcon({
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
      <path d="m9 15-1-3 4-2 4 1h3.5M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8-13a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1 11v-7M8 20h7l1-4 4-2m-2 6h3"/>
    </svg>
  );
}
