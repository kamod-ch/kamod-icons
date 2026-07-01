import type { IconProps } from "../../../shared/types";

export function SwipeTwoFingersLeftGestureIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m0 0H5m0 0L7.4 15M5 17.5 7.4 20M12 6.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0m0 0H5m0 0L7.4 4M5 6.5 7.4 9"/>
    </svg>
  );
}
