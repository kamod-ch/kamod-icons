import type { IconProps } from "../../../shared/types";

export function ChartLineIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M3 2a1 1 0 0 0-2 0v16.5A4.5 4.5 0 0 0 5.5 23H22a1 1 0 1 0 0-2H5.5A2.5 2.5 0 0 1 3 18.5z"/><path fill="currentColor" d="M21.707 8.707a1 1 0 0 0-1.414-1.414L15.5 12.086l-3.293-3.293a1 1 0 0 0-1.414 0l-5.5 5.5a1 1 0 1 0 1.414 1.414l4.793-4.793 3.293 3.293a1 1 0 0 0 1.414 0z"/>
    </svg>
  );
}
