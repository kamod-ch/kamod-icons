import type { IconProps } from "../../../shared/types";

export function PlayerTrackPrevIcon({
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
      <path d="M21 5v14l-8-7zM10 5v14l-8-7z"/>
    </svg>
  );
}
