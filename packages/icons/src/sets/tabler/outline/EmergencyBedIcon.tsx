import type { IconProps } from "../../../shared/types";

export function EmergencyBedIcon({
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
      <path d="M14 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-8 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 8l2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4m-2-2v4"/><path d="M12 12v2l-2.5 2.5m5 0L12 14"/>
    </svg>
  );
}
