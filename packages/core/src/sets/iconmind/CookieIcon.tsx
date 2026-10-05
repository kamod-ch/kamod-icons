import type { IconProps } from "../../shared/types";

export function CookieIcon({
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
      <path d="M12 4a8 8 0 1 0 8 8 3 3 0 0 1-4-4 3 3 0 0 1-4-4"/><path d="M8 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
