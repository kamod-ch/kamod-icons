import type { IconProps } from "../../../shared/types";

export function PhotoPauseIcon({
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
      <path d="M15 8h.01M13 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7"/><path d="m3 16 5-5c.928-.893 2.072-.893 3 0l3 3m0 0 1-1c.928-.893 2.072-.893 3 0m-1 4v5m4-5v5"/>
    </svg>
  );
}
