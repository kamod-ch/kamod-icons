import type { IconProps } from "../../shared/types";

export function DistributionShiftIcon({
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
      <path d="M3 16a4 4 0 0 1 8 0m2-4a4 4 0 0 1 8 0m-10.5 1.5 3-3"/>
    </svg>
  );
}
