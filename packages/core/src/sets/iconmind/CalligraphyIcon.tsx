import type { IconProps } from "../../shared/types";

export function CalligraphyIcon({
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
      <path d="m13 3 4 4-7 7-4-4Zm-5 9-4 4v4h4l4-4m1 4c3-2 6-2 8 0"/>
    </svg>
  );
}
