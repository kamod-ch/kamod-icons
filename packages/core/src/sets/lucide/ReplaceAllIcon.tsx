import type { IconProps } from "../../shared/types";

export function ReplaceAllIcon({
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
      <path d="M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m0-17a1 1 0 0 1 1-1m0 7a1 1 0 0 1-1-1m5 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1m2-17a1 1 0 0 0-1-1m1 6a1 1 0 0 1-1 1M3 7l3 3 3-3"/><path d="M6 10V5a2 2 0 0 1 2-2h2"/><rect x="3" y="14" rx="1"/>
    </svg>
  );
}
