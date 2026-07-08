import type { IconProps } from "../../../shared/types";

export function BatteryIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M23 9.333h-1v-1a3.67 3.67 0 0 0-3.667-3.666H5a3.67 3.67 0 0 0-3.667 3.666v7.334A3.67 3.67 0 0 0 5 19.333h13.333A3.67 3.67 0 0 0 22 15.667v-1h1a1 1 0 0 0 1-1v-3.334a1 1 0 0 0-1-1Zm-3 6.334c0 .918-.748 1.666-1.667 1.666H5a1.67 1.67 0 0 1-1.667-1.666V8.333c0-.918.748-1.666 1.667-1.666h13.333c.919 0 1.667.748 1.667 1.666z"/>
    </svg>
  );
}
