import type { IconProps } from "../../shared/types";

export function WeatherNowIcon({
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
      <path d="M4 16a4 4 0 0 1 2-7.5A5 5 0 0 1 15.5 7a5.5 5.5 0 0 1 4.5 9Z"/><path d="M9 18.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-3v3m0 0h2.5"/>
    </svg>
  );
}
