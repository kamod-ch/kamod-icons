import type { IconProps } from "../../shared/types";

export function WeatherWarningIcon({
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
      <path d="M12 3.5 21.5 20h-19ZM12 9v5"/><path d="M11 17.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
