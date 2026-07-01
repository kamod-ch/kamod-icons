import type { IconProps } from "../../../shared/types";

export function LawnMowerIcon({
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
      <path d="M6 11h5.38a1 1 0 0 1 .9.55L13 13h5a1 1 0 0 1 1 1v2"/><path d="M3 4h1.13a1 1 0 0 1 1 .86L6.72 16M17 18H9"/><path d="M9 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0m12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
    </svg>
  );
}
