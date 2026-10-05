import type { IconProps } from "../../shared/types";

export function ConfidenceThresholdIcon({
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
      <path d="M4 4v16m0 0h16M6 10h13M8 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
