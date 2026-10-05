import type { IconProps } from "../../shared/types";

export function GolfBallIcon({
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
      <path d="M4 11a8 8 0 1 0 16 0 8 8 0 1 0-16 0"/><path d="M8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8 8h12"/>
    </svg>
  );
}
