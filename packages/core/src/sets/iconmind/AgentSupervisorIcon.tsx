import type { IconProps } from "../../shared/types";

export function AgentSupervisorIcon({
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
      <path d="M16.23 2.94a10 10 0 1 1-8.46 0"/><path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
