import type { IconProps } from "../../shared/types";

export function InfiniteScrollIcon({
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
      <path d="M3 5h18M3 10h18M9.5 14l2.5 2.5 2.5-2.5m-5 4.5L12 21l2.5-2.5"/>
    </svg>
  );
}
