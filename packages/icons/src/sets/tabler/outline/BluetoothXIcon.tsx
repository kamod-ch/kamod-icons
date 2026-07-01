import type { IconProps } from "../../../shared/types";

export function BluetoothXIcon({
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
      <path d="m7 8 10 8-5 4V4l1 .802m0 6.396L7 16m9-10 4 4m0-4-4 4"/>
    </svg>
  );
}
