import type { IconProps } from "../../../shared/types";

export function TopologyStarIcon({
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
      <path d="M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-6-6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.5 7.5l3 3m-3 6 3-3m3 0 3 3m0-9-3 3"/>
    </svg>
  );
}
