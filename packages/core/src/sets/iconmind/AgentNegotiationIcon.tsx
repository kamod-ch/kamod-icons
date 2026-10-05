import type { IconProps } from "../../shared/types";

export function AgentNegotiationIcon({
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
      <path d="M7.27 3.28a3 3 0 1 1-2.54 0M13 8l3 3m.5-2v2.5H14M11 16l-3-3m-.5 2v-2.5H10m9.27 2.78a3 3 0 1 1-2.54 0"/>
    </svg>
  );
}
