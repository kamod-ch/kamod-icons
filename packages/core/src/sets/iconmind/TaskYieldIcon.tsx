import type { IconProps } from "../../shared/types";

export function TaskYieldIcon({
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
      <path d="M8.69 13.37a4 4 0 1 1-3.38 0M10 14l4.5-4.5m-2.5-3A2.5 2.5 0 0 1 14.5 4h4A2.5 2.5 0 0 1 21 6.5 2.5 2.5 0 0 1 18.5 9h-4A2.5 2.5 0 0 1 12 6.5"/>
    </svg>
  );
}
