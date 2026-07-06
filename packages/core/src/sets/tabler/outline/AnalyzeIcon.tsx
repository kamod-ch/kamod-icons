import type { IconProps } from "../../../shared/types";

export function AnalyzeIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M20 11a8.1 8.1 0 0 0-6.986-6.918A8.1 8.1 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 15 3"/><path d="M18 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 4a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
