import type { IconProps } from "../../../shared/types";

export function CarDoorIcon({
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
      <path d="M13 14h2m4-4H3m3.7-6.55L3 9v3.08a1 1 0 0 0 .85 1A6 6 0 0 1 9 19v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7.54a1 1 0 0 0-.84.45"/>
    </svg>
  );
}
