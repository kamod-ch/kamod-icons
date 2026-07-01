import type { IconProps } from "../../../shared/types";

export function BluetoothIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.75 8 10.5 8.5-5.5 5.5V2l5.5 5.5L6.75 16"/>
    </svg>
  );
}
