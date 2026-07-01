import type { IconProps } from "../../../shared/types";

export function MapRouteIcon({
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
      <path d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3zm6 5v.01M6 13v.01M17 15l-4-4m0 4 4-4"/>
    </svg>
  );
}
