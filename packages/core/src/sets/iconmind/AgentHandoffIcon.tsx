import type { IconProps } from "../../shared/types";

export function AgentHandoffIcon({
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
      <path d="M7.27 15.28a3 3 0 1 1-2.54 0M10 14l2.5-2.5m-1-1.5H14v2.5m5.27-9.22a3 3 0 1 1-2.54 0"/>
    </svg>
  );
}
