import type { IconProps } from "../../shared/types";

export function GameControllerIcon({
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
      <path d="M7 7h10c2.5 0 4 3 4 7 0 3-1 5-3 5s-3-3-6-3-4 3-6 3-3-2-3-5c0-4 1.5-7 4-7m1 3v4m-2-2h4"/><path d="M15 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
