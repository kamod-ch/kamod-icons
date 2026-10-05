import type { IconProps } from "../../shared/types";

export function MaintenanceWindowIcon({
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
      <path d="M16.23 2.94a10 10 0 1 1-8.46 0"/><path d="M10.5 9H8v6h2.5m3-6H16v6h-2.5m-3-3h3"/>
    </svg>
  );
}
