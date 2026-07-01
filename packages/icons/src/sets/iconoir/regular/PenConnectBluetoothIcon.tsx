import type { IconProps } from "../../../shared/types";

export function PenConnectBluetoothIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.5 17.5-1 4 3.731-.933a1 1 0 0 0 .465-.263L21.5 8.5a2.12 2.12 0 0 0 0-3v0a2.12 2.12 0 0 0-3 0l-4 4m3-3 3 3M5 6.6l7 5.1L8.333 15V3L12 6.3l-7 5.1"/>
    </svg>
  );
}
