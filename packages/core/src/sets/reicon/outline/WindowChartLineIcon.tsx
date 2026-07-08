import type { IconProps } from "../../../shared/types";

export function WindowChartLineIcon({
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
      <g transform="scale(1.33333)"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4.75 12 1.75-2 1 1.25 2-3.5 1.5 2.5 2.25-4.5"/><rect x="1.75" y="2.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" rx="2" ry="2" transform="matrix(-1 0 0 -1 18 18)"/><circle cx="4.25" cy="5.25" r=".75" fill="currentColor"/><circle cx="6.75" cy="5.25" r=".75" fill="currentColor"/></g>
    </svg>
  );
}
