import type { IconProps } from "../../../shared/types";

export function BrandKotlinIcon({
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
      <path d="M20 20H4V4h16M4 20 20 4M4 12l8-8m0 8 8 8"/>
    </svg>
  );
}
