import type { IconProps } from "../../shared/types";

export function LayoutDashboardIcon({
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
      <rect x="3" y="3" rx="1"/><rect x="14" y="3" rx="1"/><rect x="14" y="12" rx="1"/><rect x="3" y="16" rx="1"/>
    </svg>
  );
}
