import type { IconProps } from "../../../shared/types";

export function BodyScanIcon({
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
      <path d="M11 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-1 9v-1a2 2 0 1 1 4 0v1m-6-7q1 1 2 1h4q1 0 2-1m-4 1v3M3 7V5a2 2 0 0 1 2-2h2M3 17v2a2 2 0 0 0 2 2h2M17 3h2a2 2 0 0 1 2 2v2m-4 14h2a2 2 0 0 0 2-2v-2"/>
    </svg>
  );
}
