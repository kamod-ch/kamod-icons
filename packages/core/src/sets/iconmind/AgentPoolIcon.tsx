import type { IconProps } from "../../shared/types";

export function AgentPoolIcon({
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
      <path d="M8.77 4.78a3 3 0 1 1-2.54 0m11.54 0a3 3 0 1 1-2.54 0M3 14v5h18v-5"/>
    </svg>
  );
}
