import type { IconProps } from "../../../shared/types";

export function PhotoCircleMinusIcon({
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
      <path d="M15 8h.01m5.465 7.035A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.525 8.985"/><path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4"/><path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2 2m-4 4h6"/>
    </svg>
  );
}
