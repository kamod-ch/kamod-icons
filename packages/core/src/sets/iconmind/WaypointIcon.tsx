import type { IconProps } from "../../shared/types";

export function WaypointIcon({
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
      <path d="M12 2v3m0 2.5V10m-4 4a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M11 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1 4v4"/>
    </svg>
  );
}
