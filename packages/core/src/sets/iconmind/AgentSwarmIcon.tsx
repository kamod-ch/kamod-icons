import type { IconProps } from "../../shared/types";

export function AgentSwarmIcon({
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
      <path d="M7.27 3.28a3 3 0 1 1-2.54 0m12.54-1a3 3 0 1 1-2.54 0m5.54 9a3 3 0 1 1-2.54 0m-5.46-1a3 3 0 1 1-2.54 0m-1.46 6a3 3 0 1 1-2.54 0"/>
    </svg>
  );
}
