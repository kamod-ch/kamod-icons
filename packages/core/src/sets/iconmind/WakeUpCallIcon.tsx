import type { IconProps } from "../../shared/types";

export function WakeUpCallIcon({
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
      <path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0m8-4v4m0 0h4M5 5l3 3m11-3-3 3"/>
    </svg>
  );
}
