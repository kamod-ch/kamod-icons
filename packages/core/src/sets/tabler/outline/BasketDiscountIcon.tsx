import type { IconProps } from "../../../shared/types";

export function BasketDiscountIcon({
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
      <path d="m17 10-2-6m-8 6 2-6m3.5 16H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.394 2.248"/><path d="M13.856 13.254A2 2 0 1 0 12 16m4 5 5-5m0 5v.01M16 16v.01"/>
    </svg>
  );
}
