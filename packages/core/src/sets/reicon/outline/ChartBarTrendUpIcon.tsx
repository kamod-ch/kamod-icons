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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><rect x="13.25" y="2.75" rx="1" ry="1"/><rect x="7.75" y="7.75" rx="1" ry="1"/><rect x="2.25" y="11.75" rx="1" ry="1"/><path d="M6.25 2.75h2.5v2.5M8.5 3 2.75 8.75"/></g>
    </svg>
  );
}
