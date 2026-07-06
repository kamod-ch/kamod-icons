import type { IconProps } from "../../../shared/types";

export function JewishStarIcon({
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
      <path d="m12 2 3 5h6l-3 5 3 5h-6l-3 5-3-5H3l3-5-3-5h6z"/>
    </svg>
  );
}
