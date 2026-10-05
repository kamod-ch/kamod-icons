import type { IconProps } from "../../shared/types";

export function SafetyCategoryIcon({
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
      <path d="M3 6h10l8 8-8 8H3Z"/><path d="M6 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3 1h6v3l-3 3-3-3Z"/>
    </svg>
  );
}
