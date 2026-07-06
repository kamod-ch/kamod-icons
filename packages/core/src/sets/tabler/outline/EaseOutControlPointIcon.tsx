import type { IconProps } from "../../../shared/types";

export function EaseOutControlPointIcon({
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
      <path d="M3 21S13 5 21 5M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h2m5 0h-2"/>
    </svg>
  );
}
