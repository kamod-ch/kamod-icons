import type { IconProps } from "../../shared/types";

export function DistinctRowsIcon({
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
      <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h3A2.5 2.5 0 0 1 10 5.5 2.5 2.5 0 0 1 7.5 8h-3A2.5 2.5 0 0 1 2 5.5m12 0A2.5 2.5 0 0 1 16.5 3h3A2.5 2.5 0 0 1 22 5.5 2.5 2.5 0 0 1 19.5 8h-3A2.5 2.5 0 0 1 14 5.5M6 8l6 6 6-6M4 18.5A2.5 2.5 0 0 1 6.5 16h11a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5"/>
    </svg>
  );
}
