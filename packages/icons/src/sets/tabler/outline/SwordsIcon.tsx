import type { IconProps } from "../../../shared/types";

export function SwordsIcon({
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
      <path d="M21 3v5l-11 9-4 4-3-3 4-4 9-11zM5 13l6 6m3.32-1.68L18 21l3-3-3.365-3.365M10 5.5 8 3H3v5l3 2.5"/>
    </svg>
  );
}
