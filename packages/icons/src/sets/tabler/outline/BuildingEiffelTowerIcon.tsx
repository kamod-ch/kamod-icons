import type { IconProps } from "../../../shared/types";

export function BuildingEiffelTowerIcon({
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
      <path d="M11 4c0 4.889-2.292 12.111-5 17m7-17c0 4.889 2.292 12.111 5 17M3 21h18M8 14h8m-7-4h6m-5-6h4m-2-2v1.778M10 21s.27-1.406.667-2c.333-.5.666-1 1.333-1s1 .5 1.333 1c.448.672.667 2 .667 2"/>
    </svg>
  );
}
