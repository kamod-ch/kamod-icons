import type { IconProps } from "../../shared/types";

export function BakingIcon({
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
      <path d="M5 9a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 3 3 0 0 1-3 3H8a3 3 0 0 1-3-3M2 9h3m14 0h3M4 20c3-3 13-3 16 0"/>
    </svg>
  );
}
