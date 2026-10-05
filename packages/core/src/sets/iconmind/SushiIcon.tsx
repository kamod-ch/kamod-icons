import type { IconProps } from "../../shared/types";

export function SushiIcon({
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
      <path d="M5 16a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 3 3 0 0 1-3 3H8a3 3 0 0 1-3-3m0-6c0-3 3-4 7-4s7 1 7 4Z"/>
    </svg>
  );
}
