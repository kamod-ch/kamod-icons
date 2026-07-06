import type { IconProps } from "../../shared/types";

export function ChartColumnIncreasingIcon({
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
      <path d="M13 17V9m5 8V5M3 3v16a2 2 0 0 0 2 2h16M8 17v-3"/>
    </svg>
  );
}
