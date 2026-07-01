import type { IconProps } from "../../../shared/types";

export function MoodHappyIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m6-3h.01M15 9h.01"/><path d="M8 13a4 4 0 1 0 8 0z"/>
    </svg>
  );
}
