import type { IconProps } from "../../../shared/types";

export function TopologyFullHierarchyIcon({
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
      <path d="M20 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0m12 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-6 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M6 8v8m12 0V8M8 6h8m0 12H8M7.5 7.5l3 3m3 3 3 3m0-9-3 3m-3 3-3 3"/>
    </svg>
  );
}
