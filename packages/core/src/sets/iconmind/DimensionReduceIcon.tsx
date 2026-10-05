import type { IconProps } from "../../shared/types";

export function DimensionReduceIcon({
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
      <path d="m13 4 4 4-6.5 6.5L4 8l4-4m10.5 10 2.5 2.5-4 4-4-4 2.5-2.5"/>
    </svg>
  );
}
