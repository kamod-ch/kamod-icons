import type { IconProps } from "../../shared/types";

export function McpRegistryIcon({
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
      <path d="M14 4h4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7l3-3h4"/><path d="M6 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0h6M6 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0h6"/>
    </svg>
  );
}
