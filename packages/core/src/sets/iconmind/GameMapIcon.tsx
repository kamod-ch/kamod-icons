import type { IconProps } from "../../shared/types";

export function GameMapIcon({
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
      <path d="M3 6c2-1 4 2 6 2s4-3 6-3 4 3 6 1v12c-2 2-4-1-6-1s-4 3-6 3-4-3-6-2Z"/><path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
