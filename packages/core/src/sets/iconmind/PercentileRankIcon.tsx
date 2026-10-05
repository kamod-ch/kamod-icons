import type { IconProps } from "../../shared/types";

export function PercentileRankIcon({
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
      <path d="M3 16h18M6 14.5v3m5-3v3M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v9"/>
    </svg>
  );
}
