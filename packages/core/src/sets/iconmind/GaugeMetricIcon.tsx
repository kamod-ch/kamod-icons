import type { IconProps } from "../../shared/types";

export function GaugeMetricIcon({
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
      <path d="M4 4v16m0 0h16M9.5 9.5 12 7l2.5 2.5m-5 5L12 17l2.5-2.5"/>
    </svg>
  );
}
