import type { IconProps } from "../../shared/types";

export function DynamicBatchIcon({
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
      <path d="M3.5 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 4h2.5v16H8m5-8h4m-.5-2.5L19 12l-2.5 2.5"/>
    </svg>
  );
}
