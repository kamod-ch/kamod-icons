import type { IconProps } from "../../shared/types";

export function StethoscopeIcon({
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
      <path d="M6 4v4a6 6 0 0 0 12 0V4"/><path d="M5 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 11v2.5M9 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
