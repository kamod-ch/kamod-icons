import type { IconProps } from "../../shared/types";

export function PhotoBoothIcon({
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
      <path d="M4 3v18h16V3Z"/><path d="M8 3v13c0 2 4 2 4 0V3m2 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
