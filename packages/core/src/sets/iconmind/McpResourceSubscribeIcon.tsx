import type { IconProps } from "../../shared/types";

export function McpResourceSubscribeIcon({
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
      <path d="M13 3H9L6 6v15h12V8"/><path d="M15 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-3 0a4 4 0 0 1 4-4m-7 4a7 7 0 0 1 7-7"/>
    </svg>
  );
}
