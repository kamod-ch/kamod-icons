import type { IconProps } from "../../shared/types";

export function ToothIcon({
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
      <path d="M7 5a4 4 0 0 1 5 2 4 4 0 0 1 5-2c2 4 0 14-2.5 14-1.5 0-1.5-6-2.5-6s-1 6-2.5 6C7 19 5 9 7 5m0 16h10"/>
    </svg>
  );
}
