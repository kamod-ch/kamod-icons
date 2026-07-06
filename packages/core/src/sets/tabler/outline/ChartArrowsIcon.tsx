import type { IconProps } from "../../../shared/types";

export function ChartArrowsIcon({
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
      <path d="M3 18h14M9 9l3 3-3 3m5 0 3 3-3 3M3 3v18m0-9h9m6-9 3 3-3 3M3 6h18"/>
    </svg>
  );
}
