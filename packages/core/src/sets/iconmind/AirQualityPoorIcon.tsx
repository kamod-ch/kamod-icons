import type { IconProps } from "../../shared/types";

export function AirQualityPoorIcon({
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
      <path d="M3 16a9 9 0 0 1 18 0M3 16h18m-9-8v4"/><path d="M11 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
