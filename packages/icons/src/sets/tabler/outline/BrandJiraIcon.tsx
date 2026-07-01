import type { IconProps } from "../../../shared/types";

export function BrandJiraIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M20 4h-9v1.5A2.5 2.5 0 0 0 13.5 8H15a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H20z"/><path d="M15 8H7v1.5A2.5 2.5 0 0 0 9.5 12H11a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H16V9a1 1 0 0 0-1-1"/><path d="M11 12H3v1.5A2.5 2.5 0 0 0 5.5 16H7a1 1 0 0 1 1 1v1.5a2.5 2.5 0 0 0 2.5 2.5H12v-8a1 1 0 0 0-1-1"/>
    </svg>
  );
}
