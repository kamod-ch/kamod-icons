import type { IconProps } from "../../../shared/types";

export function ChartCirclesIcon({
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
      <path d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0"/><path d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0"/>
    </svg>
  );
}
