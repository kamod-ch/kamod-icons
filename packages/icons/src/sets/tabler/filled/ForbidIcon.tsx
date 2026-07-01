import type { IconProps } from "../../../shared/types";

export function ForbidIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M9.613 8.21a1 1 0 0 0-1.32 1.497l6 6 .094.083a1 1 0 0 0 1.32-1.497l-6-6z"/>
    </svg>
  );
}
