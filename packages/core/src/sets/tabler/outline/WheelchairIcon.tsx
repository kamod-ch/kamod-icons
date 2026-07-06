import type { IconProps } from "../../../shared/types";

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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0m14 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M19 17a3 3 0 0 0-3-3h-3.4M3 3h1a2 2 0 0 1 2 2v6m0-3h11m-2 0v6"/>
    </svg>
  );
}
