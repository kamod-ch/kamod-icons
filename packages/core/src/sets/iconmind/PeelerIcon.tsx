import type { IconProps } from "../../shared/types";

export function PeelerIcon({
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
      <path d="M5 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 3 3 0 0 1-3 3H8a3 3 0 0 1-3-3m2 3v10M17 9v10M7 19h10"/>
    </svg>
  );
}
