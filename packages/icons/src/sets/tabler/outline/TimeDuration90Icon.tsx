import type { IconProps } from "../../../shared/types";

export function TimeDuration90Icon({
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
      <path d="M8 14.25c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v1.5c0 .414.336.75.75.75H11m3-1.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
    </svg>
  );
}
