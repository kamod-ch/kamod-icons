import type { IconProps } from "../../../shared/types";

export function MusicMinusIcon({
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
      <path d="M3 17a3 3 0 1 0 6 0 3 3 0 0 0-6 0m6 0V4h10v11M9 8h10m-3 11h6"/>
    </svg>
  );
}
