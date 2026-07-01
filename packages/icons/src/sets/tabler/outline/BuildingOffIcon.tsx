import type { IconProps } from "../../../shared/types";

export function BuildingOffIcon({
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
      <path d="M3 21h18M9 12h1m-1 4h1m4-8h1m-1 8h1M5 21V5m2-2h10c1 0 2 1 2 2v10m0 4v2M3 3l18 18"/>
    </svg>
  );
}
