import type { IconProps } from "../../shared/types";

export function BbqIcon({
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
      <path d="M4 11a8 8 0 0 1 16 0M4 13h16c0 3-3 5-8 5s-8-2-8-5m4 5-3 3m11-3 3 3"/>
    </svg>
  );
}
