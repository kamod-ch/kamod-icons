import type { IconProps } from "../../../shared/types";

export function SwipeTwoFingersUpGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 0V5m0 0L9 7.4M6.5 5 4 7.4M17.5 12a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 0V5m0 0L20 7.4M17.5 5 15 7.4"/>
    </svg>
  );
}
