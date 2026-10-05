import type { IconProps } from "../../shared/types";

export function McpAuthFlowIcon({
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
      <path d="M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6l3-3h3.5M7 18h5"/><path d="M15 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6-7h6v3H9Zm1.5 0a1.5 1.5 0 0 1 3 0"/>
    </svg>
  );
}
