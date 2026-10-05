import type { IconProps } from "../../shared/types";

export function StatusPageIcon({
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
      <path d="M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h3"/><path d="M7 10a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.5 0H17M7 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.5 0H14"/>
    </svg>
  );
}
