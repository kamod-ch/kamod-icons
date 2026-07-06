import type { IconProps } from "../../../shared/types";

export function RunIcon({
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
      <path d="M11.007 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17l5 1 .75-1.5M15 21v-4l-4-3 1-6"/><path d="M7 12V9l5-1 3 3 3 1"/>
    </svg>
  );
}
