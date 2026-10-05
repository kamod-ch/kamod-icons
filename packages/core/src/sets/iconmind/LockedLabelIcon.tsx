import type { IconProps } from "../../shared/types";

export function LockedLabelIcon({
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
      <path d="M3 6h10l8 8-8 8H3Z"/><path d="M9 13.5h6v3H9Zm1.5 0a1.5 1.5 0 0 1 3 0"/>
    </svg>
  );
}
