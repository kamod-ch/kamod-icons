import type { IconProps } from "../../shared/types";

export function PriceDownIcon({
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
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4 7v6.5M9.5 18l2.5 2.5 2.5-2.5"/>
    </svg>
  );
}
