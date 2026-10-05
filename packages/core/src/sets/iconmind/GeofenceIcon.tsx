import type { IconProps } from "../../shared/types";

export function GeofenceIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 3v4m6-4h9v5.5L17.5 21 13 16.5Z"/>
    </svg>
  );
}
