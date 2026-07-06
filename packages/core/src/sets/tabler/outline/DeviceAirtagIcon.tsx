import type { IconProps } from "../../../shared/types";

export function DeviceAirtagIcon({
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
      <path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0m5 3v.01"/><path d="M15 15a6 6 0 0 0-6-6m3 6a3 3 0 0 0-3-3"/>
    </svg>
  );
}
