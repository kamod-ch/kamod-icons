import type { IconProps } from "../../../shared/types";

export function PlaylistAddIcon({
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
      <path d="M19 8H5m0 4h9m-3 4H5m10 0h6m-3-3v6"/>
    </svg>
  );
}
