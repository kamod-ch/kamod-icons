import type { IconProps } from "../../../shared/types";

export function MapCodeIcon({
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
      <path d="m11 18-2-1-6 3V7l6-3 6 3 6-3v9M9 4v13m6-10v6.5m5 7.5 2-2-2-2m-3 0-2 2 2 2"/>
    </svg>
  );
}
