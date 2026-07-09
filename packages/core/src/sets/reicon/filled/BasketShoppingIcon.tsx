import type { IconProps } from "../../../shared/types";

export function BasketShoppingIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M6.333 9.333a1 1 0 0 1-.875-1.485l3.334-6a1.001 1.001 0 0 1 1.75.97l-3.334 6a1 1 0 0 1-.875.515Zm11.334 0a1 1 0 0 1-.875-.514l-3.333-6a1 1 0 1 1 1.749-.971l3.333 6a1 1 0 0 1-.874 1.485Z"/><path d="M21.667 7.333H2.333a1 1 0 0 0 0 2h.747l.72 8.639a3.69 3.69 0 0 0 3.655 3.361h9.092a3.69 3.69 0 0 0 3.654-3.361l.72-8.639h.747a1 1 0 0 0 0-2Z"/></g>
    </svg>
  );
}
