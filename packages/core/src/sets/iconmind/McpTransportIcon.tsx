import type { IconProps } from "../../shared/types";

export function McpTransportIcon({
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
      <path d="M7.5 6H10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9l3-3ZM16 9a3 3 0 0 1 3-3 3 3 0 0 1 3 3v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3Zm-3 2h3m-3 4h3"/>
    </svg>
  );
}
