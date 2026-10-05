import type { IconProps } from "../../shared/types";

export function TaskQueueAgentIcon({
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
      <path d="M4 6.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14.32 10a5.5 5.5 0 1 1-4.64 0"/>
    </svg>
  );
}
