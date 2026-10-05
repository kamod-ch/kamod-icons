import type { IconProps } from "../../shared/types";

export function QueuePriorityIcon({
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12ZM12 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5.5 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 18h19"/>
    </svg>
  );
}
