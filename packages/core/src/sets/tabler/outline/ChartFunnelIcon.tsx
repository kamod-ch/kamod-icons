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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4.387 3h15.226a1 1 0 0 1 .948 1.316l-5.105 15.316A2 2 0 0 1 13.558 21h-3.116a2 2 0 0 1-1.898-1.368L3.44 4.316A1 1 0 0 1 4.387 3M5 9h14M7 15h10"/>
    </svg>
  );
}
