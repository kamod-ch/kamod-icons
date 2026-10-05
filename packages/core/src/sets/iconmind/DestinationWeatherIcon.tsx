import type { IconProps } from "../../shared/types";

export function DestinationWeatherIcon({
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
      <path d="M4 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M9 20a4 4 0 0 1 0-8 5 5 0 0 1 9 0 4 4 0 0 1 0 8Z"/>
    </svg>
  );
}
