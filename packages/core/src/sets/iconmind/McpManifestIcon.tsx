import type { IconProps } from "../../shared/types";

export function McpManifestIcon({
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
      <path d="M13 3H9L6 6v15h12V8m-9 3h6m-6 4h4"/><path d="M14 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
