import type { IconProps } from "../../../shared/types";

export function MilitaryRankIcon({
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
      <path d="M18 7v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l6-4z"/><path d="m10 13 2-1 2 1m-4 4 2-1 2 1m-4-8 2-1 2 1"/>
    </svg>
  );
}
