import type { IconProps } from "../../../shared/types";

export function LocationPauseIcon({
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
      <path d="M13.02 20.04 10 14l-7-3.5a.55.55 0 0 1 0-1L21 3l-3.634 10.062M17 17v5m4-5v5"/>
    </svg>
  );
}
