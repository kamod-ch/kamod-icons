import type { IconProps } from "../../shared/types";

export function RunningIcon({
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
      <path d="M13 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m4 4-5 5m5-5 4 4m-6.5-1.5H10m2 2.5 4 4v3m-4-7-4 4H4"/>
    </svg>
  );
}
