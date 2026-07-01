import type { IconProps } from "../../../shared/types";

export function DeviceWatchOffIcon({
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
      <path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132A3 3 0 0 1 15 18H9a3 3 0 0 1-3-3V9c0-.817.327-1.559.857-2.1M9 18v3h6v-3M9 5V3h6v3M3 3l18 18"/>
    </svg>
  );
}
