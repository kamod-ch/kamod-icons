import type { IconProps } from "../../shared/types";

export function AgentMarketIcon({
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
      <path d="M8.69 3.37a4 4 0 1 1-3.38 0M11 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M14 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
