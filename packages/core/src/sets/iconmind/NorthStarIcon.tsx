import type { IconProps } from "../../shared/types";

export function NorthStarIcon({
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
      <path d="m12 7 5 5-5 5-5-5ZM4 4l3 3m13-3-3 3M4 20l3-3m13 3-3-3"/>
    </svg>
  );
}
