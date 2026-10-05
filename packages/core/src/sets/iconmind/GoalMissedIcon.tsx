import type { IconProps } from "../../shared/types";

export function GoalMissedIcon({
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
      <path d="M4 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m9-2.5 5 5m0-5-5 5"/>
    </svg>
  );
}
