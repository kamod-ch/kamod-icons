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
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6.333 8.333 3.334-6m8 6-3.334-6m5.667 6-.796 9.555a2.666 2.666 0 0 1-2.657 2.445H7.453a2.666 2.666 0 0 1-2.657-2.445L4 8.333m-1.667 0h19.334"/>
    </svg>
  );
}
