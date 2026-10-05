import type { IconProps } from "../../shared/types";

export function SmogIcon({
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
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-5 6h18M7 21v-5h4v5m3 0v-4h4v4"/>
    </svg>
  );
}
