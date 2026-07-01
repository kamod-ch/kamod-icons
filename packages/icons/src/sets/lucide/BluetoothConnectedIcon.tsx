import type { IconProps } from "../../shared/types";

export function BluetoothConnectedIcon({
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
      <path d="m7 7 10 10-5 5V2l5 5L7 17m11-5h3M3 12h3"/>
    </svg>
  );
}
