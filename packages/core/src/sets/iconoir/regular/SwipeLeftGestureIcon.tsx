import type { IconProps } from "../../../shared/types";

export function SwipeLeftGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12a6 6 0 1 0 12 0 6 6 0 0 0-12 0m0 0H2m0 0 3-3m-3 3 3 3"/>
    </svg>
  );
}
