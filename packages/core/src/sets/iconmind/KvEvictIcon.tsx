import type { IconProps } from "../../shared/types";

export function KvEvictIcon({
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
      <path d="M5.5 4H3v16h2.5m3-12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0m6-4h3m0-2.5L20 12l-2.5 2.5"/>
    </svg>
  );
}
