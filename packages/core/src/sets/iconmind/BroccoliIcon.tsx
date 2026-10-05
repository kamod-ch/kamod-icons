import type { IconProps } from "../../shared/types";

export function BroccoliIcon({
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
      <path d="M5 13a4 4 0 0 1 4-6 4 4 0 0 1 6 0 4 4 0 0 1 4 6Zm7 0v7m0-4H8m4 0h4"/>
    </svg>
  );
}
