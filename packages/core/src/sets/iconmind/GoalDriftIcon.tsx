import type { IconProps } from "../../shared/types";

export function GoalDriftIcon({
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
      <path d="M4 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M8 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 5h11.5m0-2.5L17 5l-2.5 2.5"/>
    </svg>
  );
}
