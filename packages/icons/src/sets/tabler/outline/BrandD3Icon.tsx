import type { IconProps } from "../../../shared/types";

export function BrandD3Icon({
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
      <path d="M3 4h1.8C8.776 4 12 7.582 12 12s-3.224 8-7.2 8H3m9-16h5.472C19.42 4 21 5.79 21 8s-1.58 4-3.528 4m0 0H15m2.472 0H15.12m2.352 0C19.42 12 21 13.79 21 16s-1.58 4-3.528 4H12"/>
    </svg>
  );
}
