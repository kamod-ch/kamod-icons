import type { IconProps } from "../../../shared/types";

export function BrandPolymerIcon({
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
      <path d="M6.706 6 3 12l3.706 6h1.059l8.47-12h1.06L21 12l-3.706 6"/>
    </svg>
  );
}
