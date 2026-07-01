import type { IconProps } from "../../../shared/types";

export function EarphoneBluetoothIcon({
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
      <path d="M6.57 12.77A6.9 6.9 0 0 1 6 10a7 7 0 0 1 14 0M9 16l-1 1"/><path d="m10.83 19.83 6.36-6.37a1 1 0 0 0 0-1.41L13 7.81a1 1 0 0 0-1.41 0l-6.42 6.36a4 4 0 0 0 0 5.66 4 4 0 0 0 5.66 0"/>
    </svg>
  );
}
