import type { IconProps } from "../../../shared/types";

export function PennantIcon({
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
      <path d="M10 2a1 1 0 0 1 .993.883L11 3v.35l8.406 3.736c.752.335.79 1.365.113 1.77l-.113.058L11 12.649V20h1a1 1 0 0 1 .117 1.993L12 22H8a1 1 0 0 1-.117-1.993L8 20h1V3a1 1 0 0 1 1-1"/>
    </svg>
  );
}
