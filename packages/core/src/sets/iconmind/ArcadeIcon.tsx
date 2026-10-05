import type { IconProps } from "../../shared/types";

export function ArcadeIcon({
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
      <path d="M5 21V5h14v16Z"/><path d="M8 8h8v5H8Zm0 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
