import type { IconProps } from "../../shared/types";

export function SatelliteIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3.48 10.26a8 8 0 0 1 15.04 5.5M11 13l6-6m-6 6v7m-5 0h10"/>
    </svg>
  );
}
