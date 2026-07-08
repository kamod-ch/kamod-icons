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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M2.75 2a.75.75 0 0 0-1.5 0v16.5a4.25 4.25 0 0 0 4.25 4.25H22a.75.75 0 0 0 0-1.5H5.5a2.75 2.75 0 0 1-2.75-2.75z"/><path fill="currentColor" d="M21.53 8.53a.75.75 0 0 0-1.06-1.06l-4.97 4.97-3.47-3.47a.75.75 0 0 0-1.06 0l-5.5 5.5a.75.75 0 1 0 1.06 1.06l4.97-4.97 3.47 3.47a.75.75 0 0 0 1.06 0z"/>
    </svg>
  );
}
