import type { IconProps } from "../../../shared/types";

export function ReportsIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <rect x="16" y="3" fill="currentColor" rx="2"/><rect x="9.5" y="9" fill="currentColor" rx="2"/><rect x="3" y="16" fill="currentColor" rx="2"/>
    </svg>
  );
}
