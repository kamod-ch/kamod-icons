import type { IconProps } from "../../../shared/types";

export function SwipeUpIcon({
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
      <path d="M8 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4-4V4M9 7l3-3 3 3"/>
    </svg>
  );
}
