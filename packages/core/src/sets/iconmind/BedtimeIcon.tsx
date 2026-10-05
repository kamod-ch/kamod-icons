import type { IconProps } from "../../shared/types";

export function BedtimeIcon({
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
      <path d="M3 18a3 3 0 0 1 0-6h18a3 3 0 0 1 0 6ZM14 2a5 5 0 1 0 0 10 4 4 0 0 1 0-10"/>
    </svg>
  );
}
