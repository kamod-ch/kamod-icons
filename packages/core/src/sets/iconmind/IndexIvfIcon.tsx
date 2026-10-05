import type { IconProps } from "../../shared/types";

export function IndexIvfIcon({
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
      <path d="M3 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m7 0a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M16 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
