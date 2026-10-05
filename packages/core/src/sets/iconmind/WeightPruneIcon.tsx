import type { IconProps } from "../../shared/types";

export function WeightPruneIcon({
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
      <path d="M2 7.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m14 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-7 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7.5 10l2.5 2.5m6.5-2.5L14 12.5m.5-3.5 3 3"/>
    </svg>
  );
}
