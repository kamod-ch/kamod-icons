import type { IconProps } from "../../../shared/types";

export function Filter2DollarIcon({
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
      <path d="M4 6h16M6 12h10m-7 6h4m8-3h-2m-2 6h2m0 0v1m0-1h.5a1.503 1.503 0 0 0 1.5-1.5 1.503 1.503 0 0 0-1.5-1.5h-1a1.503 1.503 0 0 1-1.5-1.5 1.503 1.503 0 0 1 1.5-1.5h.5m0-1v1"/>
    </svg>
  );
}
