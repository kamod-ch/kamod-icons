import type { IconProps } from "../../../shared/types";

export function DashboardIcon({
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
      <path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0m3.45-1.45L15.5 9.5"/><path d="M6.4 20a9 9 0 1 1 11.2 0z"/>
    </svg>
  );
}
