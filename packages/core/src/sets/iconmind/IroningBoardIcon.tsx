import type { IconProps } from "../../shared/types";

export function IroningBoardIcon({
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
      <path d="M3 6h14a3 3 0 0 1 0 6H3Zm4 6c-1 3-2 6-3 8m9-8c1 3 2 6 3 8"/>
    </svg>
  );
}
