import type { IconProps } from "../../../shared/types";

export function DeviceWatchSearchIcon({
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
      <path d="M11 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2m-3 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22M9 18v3h3M9 6V3h6v3"/>
    </svg>
  );
}
