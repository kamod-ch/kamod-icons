import type { IconProps } from "../../../shared/types";

export function MapShareIcon({
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
      <path d="m13 19-4-2-6 3V7l6-3 6 3 6-3v9M9 4v13m6-10v6.5m1 8.5 5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}
