import type { IconProps } from "../../../shared/types";

export function ChartBarTrendUpIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><rect x="12.5" y="2" rx="1.75" ry="1.75"/><rect x="7" y="7" rx="1.75" ry="1.75"/><rect x="1.5" y="11" rx="1.75" ry="1.75"/><path d="M2.75 9.5a.74.74 0 0 0 .53-.22L8 4.56v.689a.75.75 0 0 0 1.5 0V2.75A.75.75 0 0 0 8.75 2h-2.5a.75.75 0 0 0 0 1.5h.689L2.22 8.22a.75.75 0 0 0 .53 1.281Z"/></g>
    </svg>
  );
}
