import type { IconProps } from "../../shared/types";

export function RankingIcon({
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
      <path d="M3 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h14M3 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h10M3 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0h6"/>
    </svg>
  );
}
