import type { IconProps } from "../../../shared/types";

export function CliffJumpingIcon({
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
      <path d="m10.5 18 2.5 2 2-2m3 3 3-3-4-2-2-5"/><path d="m9 8 3 3 3 1 4-2 3-2M3 21v-1l2-3 .5-2.5L7 12 6 7l1-3-1-1-2 .5L2 3"/><path d="M13.007 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
