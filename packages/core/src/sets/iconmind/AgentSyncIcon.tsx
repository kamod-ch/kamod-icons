import type { IconProps } from "../../shared/types";

export function AgentSyncIcon({
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
      <path d="M8.69 3.37a4 4 0 1 1-3.38 0M13 12h8m-2.5-2.5L21 12l-2.5 2.5M15 19h6m-3.5-2.5L15 19l2.5 2.5"/>
    </svg>
  );
}
