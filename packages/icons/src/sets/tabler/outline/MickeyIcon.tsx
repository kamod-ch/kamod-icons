import type { IconProps } from "../../../shared/types";

export function MickeyIcon({
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
      <path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7 7 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3m13 0a3.5 3.5 0 1 1-.826 6.902 7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3"/><path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/>
    </svg>
  );
}
