import type { IconProps } from "../../shared/types";

export function CostPerCallIcon({
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
      <path d="M7 7a5 5 0 1 0 10 0A5 5 0 1 0 7 7"/><path d="M10 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-6 9h13m-1.5-2 2 2-2 2M4 20h9"/>
    </svg>
  );
}
