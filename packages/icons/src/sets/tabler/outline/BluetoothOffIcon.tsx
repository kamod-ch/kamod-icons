import type { IconProps } from "../../../shared/types";

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
      <path d="m3 3 18 18m-4.562-4.55L12 20v-8m0-4V4l5 4-2.776 2.22m-2.222 1.779-5 4"/>
    </svg>
  );
}
