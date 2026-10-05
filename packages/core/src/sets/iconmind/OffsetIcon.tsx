import type { IconProps } from "../../shared/types";

export function OffsetIcon({
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
      <path d="M2 12h20M5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m6-4v8m3-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
