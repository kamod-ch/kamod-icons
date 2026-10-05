import type { IconProps } from "../../shared/types";

export function EndangeredIcon({
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
      <path d="M4 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m5-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a5 5 0 0 1 10 0 4 4 0 0 1-5 4 4 4 0 0 1-5-4M19 6v8m-1 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
