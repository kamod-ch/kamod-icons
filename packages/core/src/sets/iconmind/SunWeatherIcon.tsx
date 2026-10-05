import type { IconProps } from "../../shared/types";

export function SunWeatherIcon({
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
      <path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0M3.5 3.5 6 6m14.5-2.5L18 6M3.5 20.5 6 18m14.5 2.5L18 18"/>
    </svg>
  );
}
