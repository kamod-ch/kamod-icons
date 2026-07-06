import type { IconProps } from "../../../shared/types";

export function PlayFootballIcon({
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
      <path d="m3 17 5 1 .75-1.5M14 21v-4l-4-3 1-6"/><path d="M6 12V9l5-1 3 3 3 1m1.007 7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0m-8-14.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
