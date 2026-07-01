import type { IconProps } from "../../shared/types";

export function GeorgianLariIcon({
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
      <path d="M11.5 21a7.5 7.5 0 1 1 7.35-9M13 12V3M4 21h16M9 12V3"/>
    </svg>
  );
}
