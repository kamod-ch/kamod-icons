import type { IconProps } from "../../../shared/types";

export function ChartDots3Icon({
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
      <path d="M3 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m1-9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6-1 5-1.5m-7.5-7 7.81 5.37M7 7l8-1"/>
    </svg>
  );
}
