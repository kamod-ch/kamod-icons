import type { IconProps } from "../../shared/types";

export function McpPromptListIcon({
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
      <path d="M16 4h-5L7 8v6h10V5"/><path d="M19 10h-5l-4 4v6h10v-9"/>
    </svg>
  );
}
