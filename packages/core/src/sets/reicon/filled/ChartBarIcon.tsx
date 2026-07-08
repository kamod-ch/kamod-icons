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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M2 1a1 1 0 0 1 1 1v16.5A2.5 2.5 0 0 0 5.5 21H22a1 1 0 1 1 0 2H5.5A4.5 4.5 0 0 1 1 18.5V2a1 1 0 0 1 1-1Z"/><path fill="currentColor" d="M7 17v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0Zm5-11a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm3 11v-6a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0Zm4 0a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0z"/>
    </svg>
  );
}
