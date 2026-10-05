import type { IconProps } from "../../shared/types";

export function FireworksIcon({
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
      <path d="M7 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-3V4M6 8 3 5m7 3 3-3m3 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3 2 2 2"/>
    </svg>
  );
}
