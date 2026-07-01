import type { IconProps } from "../../../shared/types";

export function QueueListIcon({
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
      <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25zm-1.875 7.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
}
