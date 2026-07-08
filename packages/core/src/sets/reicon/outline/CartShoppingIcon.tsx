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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m2.333 2.333 1.802.451c.524.13.917.565.996 1.1l1.439 9.783"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.333 17.667h-14a2 2 0 0 1 0-4H17.4c.561 0 1.062-.351 1.253-.878l1.697-4.667a1.333 1.333 0 0 0-1.253-1.789H5.491"/><path fill="currentColor" strokeWidth="1.333" d="M5.333 22.667a1.334 1.334 0 1 0 0-2.668 1.334 1.334 0 0 0 0 2.668Zm13.334 0a1.334 1.334 0 1 0-.001-2.668 1.334 1.334 0 0 0 0 2.668Z"/>
    </svg>
  );
}
