import type { IconProps } from "../../shared/types";

export function HangoverIcon({
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
      <path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0M7 4l2 2 3-3 3 3 2-2m-8 9 2 2m4-2-2 2"/>
    </svg>
  );
}
