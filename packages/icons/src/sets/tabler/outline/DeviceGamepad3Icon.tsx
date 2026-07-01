import type { IconProps } from "../../../shared/types";

export function DeviceGamepad3Icon({
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
      <path d="M9 12 6 9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zm6 0 3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zm-3 3-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zm0-6L9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z"/>
    </svg>
  );
}
