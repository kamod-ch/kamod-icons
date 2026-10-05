import type { IconProps } from "../../shared/types";

export function CostAnomalyIcon({
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
      <path d="m4 7 4-4 4 4 4-4 4 4M7 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0"/><path d="M10 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
