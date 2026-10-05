import type { IconProps } from "../../shared/types";

export function SmartHomeIcon({
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
      <path d="M3 20v-8l7-7 7 7v8Z"/><path d="M8 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0m11-6c2 3 2 7 0 10"/>
    </svg>
  );
}
