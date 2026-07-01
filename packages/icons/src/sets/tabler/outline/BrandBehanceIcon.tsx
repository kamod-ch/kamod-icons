import type { IconProps } from "../../../shared/types";

export function BrandBehanceIcon({
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
      <path d="M3 18V6h4.5a3 3 0 0 1 0 6 3 3 0 0 1 0 6zm0-6h4.5m6.5 1h7a3.5 3.5 0 0 0-7 0v2a3.5 3.5 0 0 0 6.64 1M16 6h3"/>
    </svg>
  );
}
