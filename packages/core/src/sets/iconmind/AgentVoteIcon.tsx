import type { IconProps } from "../../shared/types";

export function AgentVoteIcon({
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
      <path d="M16.23 2.94a10 10 0 1 1-8.46 0"/><path d="m9 11 2 2 4-4m-7 6.5h8"/>
    </svg>
  );
}
