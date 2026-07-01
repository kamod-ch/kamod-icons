import type { IconProps } from "../../../shared/types";

export function ChartScatterIcon({
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
      <path d="M3 3v18h18M8 15.015v.015m8 .985v.015m-8-9v.015m4 3.985v.015m7-.015v.015"/>
    </svg>
  );
}
