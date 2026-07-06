import type { IconProps } from "../../../shared/types";

export function ChartFunnelIcon({
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
      <path d="m17.72 16-1.315 3.948A3 3 0 0 1 13.558 22h-3.116a3 3 0 0 1-2.847-2.052L6.28 16zm2-6-1.333 4H5.613L4.28 10zm-.106-8a2 2 0 0 1 1.896 2.632L20.387 8H3.613L2.49 4.632a2 2 0 0 1 1.72-2.624L4.387 2z"/>
    </svg>
  );
}
