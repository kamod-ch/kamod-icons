import type { IconProps } from "../../shared/types";

export function ActionNotifyIcon({
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
      <path d="M6 12a6 6 0 0 1 12 0M6 12v4m12-4v4M4 16h16m-9 3a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
