import type { IconProps } from "../../../shared/types";

export function MoodEditIcon({
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
      <path d="M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01"/><path d="M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018m6.044-.372a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"/>
    </svg>
  );
}
