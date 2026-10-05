import type { IconProps } from "../../shared/types";

export function TracerouteIcon({
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
      <path d="M2 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 16l2-2m4-3 2-2"/>
    </svg>
  );
}
