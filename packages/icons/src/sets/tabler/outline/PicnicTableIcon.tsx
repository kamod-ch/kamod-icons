import type { IconProps } from "../../../shared/types";

export function PicnicTableIcon({
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
      <path d="m16 7 2 9M8 7l-2 9M5 7h14m2 5H3"/>
    </svg>
  );
}
