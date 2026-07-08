import type { IconProps } from "../../../shared/types";

export function BagShoppingIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 6.333V4a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v2.333"/><path d="M7.112 6.333h9.777a2.665 2.665 0 0 1 2.656 2.436l.87 10a2.666 2.666 0 0 1-2.656 2.898H6.24a2.666 2.666 0 0 1-2.656-2.898l.87-10A2.666 2.666 0 0 1 7.11 6.333Z"/></g>
    </svg>
  );
}
