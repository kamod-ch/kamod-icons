import type { IconProps } from "../../shared/types";

export function TaskStealIcon({
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
      <path d="M7.5 2.83a3.5 3.5 0 1 1-2.96 0m14.96 12a3.5 3.5 0 1 1-2.96 0M8 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m5 3 2 2"/>
    </svg>
  );
}
