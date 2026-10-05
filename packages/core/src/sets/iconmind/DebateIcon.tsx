import type { IconProps } from "../../shared/types";

export function DebateIcon({
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
      <path d="M6.5 8.83a3.5 3.5 0 1 1-2.96 0m16.96 0a3.5 3.5 0 1 1-2.96 0M9 5l3 3-2 2 3 3-2 2 2.5 2.5"/>
    </svg>
  );
}
