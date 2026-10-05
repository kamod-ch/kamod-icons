import type { IconProps } from "../../shared/types";

export function PlankIcon({
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
      <path d="M2 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 1 4 4h10m-10 0v3m-4 0h6M2 18h20"/>
    </svg>
  );
}
