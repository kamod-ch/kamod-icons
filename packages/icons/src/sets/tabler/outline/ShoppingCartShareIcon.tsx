import type { IconProps } from "../../../shared/types";

export function ShoppingCartShareIcon({
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
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/><path d="M12.5 17H6V3H4"/><path d="m6 5 14 1-1 7H6m10 9 5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}
