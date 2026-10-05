import type { IconProps } from "../../shared/types";

export function NoiseIcon({
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
      <path d="M4 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7-2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
