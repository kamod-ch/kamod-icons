import type { IconProps } from "../../shared/types";

export function HomeWifiIcon({
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
      <path d="M3 20v-8l9-9 9 9v8Z"/><path d="M7 14c3-3 7-3 10 0m-7.5 3c1.5-1.5 3.5-1.5 5 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
