import type { IconProps } from "../../../shared/types";

export function BrandLineIcon({
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
      <path d="M21 10.663C21 6.439 16.959 3 12 3s-9 3.439-9 7.663c0 3.783 3.201 6.958 7.527 7.56 1.053.239.932.644.696 2.133-.039.238-.184.932.777.512.96-.42 5.18-3.201 7.073-5.48C20.377 13.884 21 12.359 21 10.673z"/>
    </svg>
  );
}
