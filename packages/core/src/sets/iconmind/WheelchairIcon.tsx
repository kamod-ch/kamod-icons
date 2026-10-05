import type { IconProps } from "../../shared/types";

export function WheelchairIcon({
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
      <path d="M3 16a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M7 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 3v6h7v4h4"/>
    </svg>
  );
}
