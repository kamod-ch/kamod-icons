import type { IconProps } from "../../shared/types";

export function AgentOutboxIcon({
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
      <path d="M7.69 3.37a4 4 0 1 1-3.38 0M12 15v6h10v-6m-5-7v5m-2.5-2.5L17 8l2.5 2.5"/>
    </svg>
  );
}
