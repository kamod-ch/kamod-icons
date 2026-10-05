import type { IconProps } from "../../shared/types";

export function NetWorthIcon({
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
      <path d="M3 7h18M3 7a3 3 0 0 0 6 0m6 0a3 3 0 0 0 6 0m-9 0v12m-4 0h8M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
