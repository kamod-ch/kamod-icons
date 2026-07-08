import type { IconProps } from "../../../shared/types";

export function CartShoppingIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path fillRule="evenodd" d="M2.58 1.363a1 1 0 0 0-.486 1.94l1.802.451c.13.033.23.141.249.276l1.29 8.774a3.001 3.001 0 0 0 .902 5.863h14a1 1 0 0 0 0-2h-14a1 1 0 0 1 0-2h11.066c.981 0 1.858-.614 2.193-1.536l1.696-4.667a2.333 2.333 0 0 0-2.193-3.13H6.36l-.235-1.596A2.33 2.33 0 0 0 4.38 1.814z" clipRule="evenodd"/><path d="M5.337 22.667a1.334 1.334 0 1 0-.001-2.668 1.334 1.334 0 0 0 0 2.668Zm13.333 0a1.334 1.334 0 1 0 0-2.668 1.334 1.334 0 0 0 0 2.668Z"/></g>
    </svg>
  );
}
