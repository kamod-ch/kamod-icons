import type { IconProps } from "../../shared/types";

export function DataResidencyEuIcon({
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
      <path d="M16.23 2.94a10 10 0 1 1-8.46 0"/><path d="M11 7.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 16.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6.5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
