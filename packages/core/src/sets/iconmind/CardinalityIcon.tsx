import type { IconProps } from "../../shared/types";

export function CardinalityIcon({
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
      <path d="M3 8a4 4 0 1 0 8 0 4 4 0 1 0-8 0m10 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
