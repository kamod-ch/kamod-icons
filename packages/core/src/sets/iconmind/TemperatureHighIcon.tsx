import type { IconProps } from "../../shared/types";

export function TemperatureHighIcon({
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
      <path d="M9 6a3 3 0 0 1 3-3 3 3 0 0 1 3 3v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3Z"/><path d="M9 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-12v8.5M16.5 6H19m-2.5 4H19"/>
    </svg>
  );
}
