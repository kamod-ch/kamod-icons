import type { IconProps } from "../../shared/types";

export function BluetoothOffIcon({
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
      <path d="m17 17-5 5V12l-5 5M2 2l20 20M14.5 9.5 17 7l-5-5v4.5"/>
    </svg>
  );
}
