import type { IconProps } from "../../../shared/types";

export function ShoppingCartPinIcon({
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
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M12 17H6V3H4"/><path d="m6 5 14 1-.716 5.011M14 13H6m15.121 7.121a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"/>
    </svg>
  );
}
