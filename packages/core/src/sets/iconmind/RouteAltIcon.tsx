import type { IconProps } from "../../shared/types";

export function RouteAltIcon({
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
      <path d="M2 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14 14a3 3 0 1 0 6 0 3 3 0 1 0-6 0M5 9v7h11v3M9 5h3.5m3 0H19v3m0 3v4"/>
    </svg>
  );
}
