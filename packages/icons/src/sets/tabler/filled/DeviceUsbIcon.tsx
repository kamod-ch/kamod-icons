import type { IconProps } from "../../../shared/types";

export function DeviceUsbIcon({
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
      <path d="M15 2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 1 1v8a6 6 0 1 1-12 0V8a1 1 0 0 1 1-1h1V3a1 1 0 0 1 1-1zm-1 2h-4v3h4z"/>
    </svg>
  );
}
