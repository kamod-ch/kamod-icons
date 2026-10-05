import type { IconProps } from "../../shared/types";

export function SwimmingRaceIcon({
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
      <path d="M5 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 2h5m0 0 4-4M3 16c3-2 6 2 9 0s6 2 9 0"/>
    </svg>
  );
}
