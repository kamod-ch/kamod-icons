import type { IconProps } from "../../shared/types";

export function ActionDatabaseIcon({
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
      <path d="M4 6a8 3 0 0 1 16 0v8a8 3 0 0 1-16 0Z"/><path d="M4 6a8 3 0 0 0 16 0m-8 11v4m-3-2 3 3 3-3"/>
    </svg>
  );
}
