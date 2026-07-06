import type { IconProps } from "../../shared/types";

export function UsbIcon({
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
      <circle cx="10" cy="7" r="1"/><circle cx="4" cy="20" r="1"/><path d="M4.7 19.3 19 5m2-2-3 1 2 2ZM9.26 7.68 5 12l2 5m3-3 5 2 3.5-3.5"/><path d="m18 12 1-1 1 1-1 1Z"/>
    </svg>
  );
}
