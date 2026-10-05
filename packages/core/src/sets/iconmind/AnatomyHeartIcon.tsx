import type { IconProps } from "../../shared/types";

export function AnatomyHeartIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M9 20c-3-3-4-7-3-10s4-4 6-2c2-2 5-1 6 2s0 7-3 10ZM9 7 6 4m5 3V3m4 4 3-3"/>
    </svg>
  );
}
