import type { IconProps } from "../../shared/types";

export function AirQualityIcon({
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
      <path d="M3 16a9 9 0 0 1 18 0M3 16h18"/><path d="M9 13a5 5 0 0 1 7-5 5 5 0 0 1-7 5"/>
    </svg>
  );
}
