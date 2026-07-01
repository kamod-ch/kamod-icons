import type { IconProps } from "../../../shared/types";

export function AcornIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m18 10-.45 4.1a8.36 8.36 0 0 1-5.18 6.83 1 1 0 0 1-.74 0 8.36 8.36 0 0 1-5.18-6.83L6 10m7-7a4.9 4.9 0 0 0-1 3M8 6h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1 3 3 0 0 1 3-3"/>
    </svg>
  );
}
