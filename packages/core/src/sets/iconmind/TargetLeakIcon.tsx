import type { IconProps } from "../../shared/types";

export function TargetLeakIcon({
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
      <path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"/><path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 8.5V20m-3-1v2.5"/>
    </svg>
  );
}
