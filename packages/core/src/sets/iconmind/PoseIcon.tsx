import type { IconProps } from "../../shared/types";

export function PoseIcon({
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
      <path d="M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v8m0-6-5 5m5-5 5 5m-5 1-5 5m5-5 5 5"/>
    </svg>
  );
}
