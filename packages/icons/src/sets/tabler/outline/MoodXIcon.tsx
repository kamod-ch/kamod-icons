import type { IconProps } from "../../../shared/types";

export function MoodXIcon({
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
      <path d="M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01"/><path d="M9.5 15c.658.64 1.56 1 2.5 1q.292 0 .574-.045M21.5 21.5l-5-5m0 5 5-5"/>
    </svg>
  );
}
