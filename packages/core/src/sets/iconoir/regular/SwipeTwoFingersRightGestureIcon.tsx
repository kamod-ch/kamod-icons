import type { IconProps } from "../../../shared/types";

export function SwipeTwoFingersRightGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m0 0h7m0 0L16.6 15m2.4 2.5L16.6 20M12 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m0 0h7m0 0L16.6 4M19 6.5 16.6 9"/>
    </svg>
  );
}
