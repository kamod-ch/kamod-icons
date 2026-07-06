import type { IconProps } from "../../../shared/types";

export function MoodCogIcon({
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
      <path d="M21 12a9 9 0 1 0-8.983 9m3.984-3a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V16m0 4v1.5m3.031-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75M9 10h.01M15 10h.01"/><path d="M9.5 15c.658.64 1.56 1 2.5 1"/>
    </svg>
  );
}
