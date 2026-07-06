import type { IconProps } from "../../../shared/types";

export function PlaylistIcon({
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
      <path d="M11 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0m6 0V4h4m-8 1H3m0 4h10m-4 4H3"/>
    </svg>
  );
}
