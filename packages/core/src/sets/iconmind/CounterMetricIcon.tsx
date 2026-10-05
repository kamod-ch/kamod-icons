import type { IconProps } from "../../shared/types";

export function CounterMetricIcon({
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
      <path d="M7 8.5v9M4.5 9 7 6.5 9.5 9M17 6.5v9M14.5 13l2.5 2.5 2.5-2.5M4 20h16"/>
    </svg>
  );
}
