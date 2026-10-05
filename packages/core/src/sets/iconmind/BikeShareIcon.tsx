import type { IconProps } from "../../shared/types";

export function BikeShareIcon({
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
      <path d="M3.5 15a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m10 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/><path d="m7 15 3-3h4l3 3m-7-7v4M3 6v13"/>
    </svg>
  );
}
