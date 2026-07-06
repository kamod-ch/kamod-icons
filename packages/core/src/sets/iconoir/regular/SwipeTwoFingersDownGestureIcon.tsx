import type { IconProps } from "../../../shared/types";

export function SwipeTwoFingersDownGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0 0v7m0 0L9 16.6M6.5 19 4 16.6M17.5 12a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0 0v7m0 0 2.5-2.4M17.5 19 15 16.6"/>
    </svg>
  );
}
