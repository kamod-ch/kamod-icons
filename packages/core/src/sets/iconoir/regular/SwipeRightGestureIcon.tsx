import type { IconProps } from "../../../shared/types";

export function SwipeRightGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m0 0h8m0 0-3-3m3 3-3 3"/>
    </svg>
  );
}
