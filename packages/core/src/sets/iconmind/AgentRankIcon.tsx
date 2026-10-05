import type { IconProps } from "../../shared/types";

export function AgentRankIcon({
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
      <path d="M13.5 3.33a3.5 3.5 0 1 1-2.96 0M7 17.5l5-5 5 5"/><path d="m7 22 5-5 5 5"/>
    </svg>
  );
}
