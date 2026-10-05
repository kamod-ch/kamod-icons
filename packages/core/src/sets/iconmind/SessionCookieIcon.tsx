import type { IconProps } from "../../shared/types";

export function SessionCookieIcon({
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
      <path d="M12 4a8 8 0 1 0 8 8 6 6 0 0 1-8-8"/><path d="M8 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
