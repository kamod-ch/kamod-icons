import type { IconProps } from "../../shared/types";

export function AgentContextIcon({
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
      <path d="M8.69 3.37a4 4 0 1 1-3.38 0M14.5 12H12v9h2.5m5-9H22v9h-2.5"/>
    </svg>
  );
}
