import type { IconProps } from "../../../shared/types";

export function ShoppingBagDiscountIcon({
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
      <path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.416 2.7"/><path d="M9 11V6a3 3 0 0 1 6 0v5m1 10 5-5m0 5v.01M16 16v.01"/>
    </svg>
  );
}
