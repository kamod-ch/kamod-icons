import type { IconProps } from "../../shared/types";

export function SatelliteDishIcon({
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
      <path d="M4 10a7.31 7.31 0 0 0 10 10Zm5 5 3-3m5 1a6 6 0 0 0-6-6m10 6A10 10 0 0 0 11 3"/>
    </svg>
  );
}
