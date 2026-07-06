import type { IconProps } from "../../../shared/types";

export function Filter2SearchIcon({
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
      <path d="M4 6h16M6 12h8.5M9 18h2m4 0a3 3 0 1 0 6.001 0A3 3 0 0 0 15 18m5.2 2.2L22 22"/>
    </svg>
  );
}
