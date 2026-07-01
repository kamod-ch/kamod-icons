import type { IconProps } from "../../shared/types";

export function ListCollapseIcon({
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
      <path d="M10 5h11m-11 7h11m-11 7h11M3 10l3-3-3-3m0 16 3-3-3-3"/>
    </svg>
  );
}
