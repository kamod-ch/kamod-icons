import type { IconProps } from "../../../shared/types";

export function ChartBarIcon({
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
      <path fill="currentColor" d="M2 1.25a.75.75 0 0 1 .75.75v16.5a2.75 2.75 0 0 0 2.75 2.75H22a.75.75 0 0 1 0 1.5H5.5a4.25 4.25 0 0 1-4.25-4.25V2A.75.75 0 0 1 2 1.25Z"/><path fill="currentColor" d="M7.25 17v-4a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0Zm4-10v10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0Zm4 10v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.5 0Zm4 0a.75.75 0 0 0 1.5 0V4a.75.75 0 0 0-1.5 0z"/>
    </svg>
  );
}
