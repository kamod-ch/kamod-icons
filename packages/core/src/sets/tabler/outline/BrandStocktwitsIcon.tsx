import type { IconProps } from "../../../shared/types";

export function BrandStocktwitsIcon({
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
      <path d="M16 3 8 7.5l8 4.5m-8 0 8 4.5L8 21"/>
    </svg>
  );
}
