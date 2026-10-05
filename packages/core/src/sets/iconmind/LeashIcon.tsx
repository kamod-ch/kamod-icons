import type { IconProps } from "../../shared/types";

export function LeashIcon({
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
      <path d="M3 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6 2c4 2 6 5 7 8m0 0h3v3h-3Z"/>
    </svg>
  );
}
