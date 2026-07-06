import type { IconProps } from "../../shared/types";

export function GavelIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14 13-7.5 7.5a2.118 2.118 0 0 1-3.46-.688A2.12 2.12 0 0 1 3.5 17.5L11 10m5 6 6-6M8 8l6-6M9 7l8 8m4-4-8-8"/>
    </svg>
  );
}
