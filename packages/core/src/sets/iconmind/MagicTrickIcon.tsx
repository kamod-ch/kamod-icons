import type { IconProps } from "../../shared/types";

export function MagicTrickIcon({
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
      <path d="M7 18V9h10v9M3 18h18M18 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
