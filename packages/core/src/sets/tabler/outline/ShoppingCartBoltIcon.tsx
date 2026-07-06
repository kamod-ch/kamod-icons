import type { IconProps } from "../../../shared/types";

export function ShoppingCartBoltIcon({
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
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M13.5 17H6V3H4"/><path d="m6 5 14 1-.858 6.004M16.5 13H6m13 3-2 3h4l-2 3"/>
    </svg>
  );
}
