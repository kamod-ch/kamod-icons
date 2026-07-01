import type { IconProps } from "../../../shared/types";

export function EaseInControlPointIcon({
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
      <path d="M3 19c8 0 18-16 18-16m-4 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2m-3 0h-2"/>
    </svg>
  );
}
