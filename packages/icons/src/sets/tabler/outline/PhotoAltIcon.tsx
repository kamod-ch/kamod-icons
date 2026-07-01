import type { IconProps } from "../../../shared/types";

export function PhotoAltIcon({
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
      <path d="M6 18h5m3 0h4M15 7h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/><path d="m3 15 5-5c.928-.893 2.072-.893 3 0l5 5"/><path d="m14 13 1-1c.928-.893 2.072-.893 3 0l3 3M3 15h18"/>
    </svg>
  );
}
