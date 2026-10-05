import type { IconProps } from "../../shared/types";

export function AgentBroadcastIcon({
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
      <path d="M13.27 9.28a3 3 0 1 1-2.54 0"/><path d="M15.25 6.37a6.5 6.5 0 0 1 0 11.26m-6.5 0a6.5 6.5 0 0 1 0-11.26"/><path d="M17 3.34a10 10 0 0 1 0 17.32m-10 0A10 10 0 0 1 7 3.34"/>
    </svg>
  );
}
