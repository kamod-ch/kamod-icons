import type { IconProps } from "../../shared/types";

export function SlowQueryIcon({
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
      <path d="M5 11a6 6 0 1 0 12 0 6 6 0 1 0-12 0m10.5 4.5L20 20M11 7v4m0 0h3"/>
    </svg>
  );
}
