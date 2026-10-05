import type { IconProps } from "../../shared/types";

export function ModelForkIcon({
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
      <path d="m12 4 2.5 2.5L12 9 9.5 6.5Zm-1.5 3.5-5 5m8-5 5 5m-16 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m15 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
