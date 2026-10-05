import type { IconProps } from "../../shared/types";

export function LabelQueueIcon({
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
      <path d="M5 3h10l3.5 3.5L15 10H5Zm0 11h10l3.5 3.5L15 21H5Z"/><path d="M7 6.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
