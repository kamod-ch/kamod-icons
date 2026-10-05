import type { IconProps } from "../../shared/types";

export function AlertGroupIcon({
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
      <path d="M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17zm8 3.5a2 2 0 0 1-4 0"/><path d="M11 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
