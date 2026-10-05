import type { IconProps } from "../../shared/types";

export function GoldenHourIcon({
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
      <path d="M7.5 17a4.5 4.5 0 0 1 9 0M2 19h20M2 12h4m12 0h4M5 6l3 3m11-3-3 3"/>
    </svg>
  );
}
