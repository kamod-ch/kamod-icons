import type { IconProps } from "../../shared/types";

export function FollowBackIcon({
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
      <path d="M3 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0m9-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0M9 12h6m-4-2-2 2 2 2"/>
    </svg>
  );
}
