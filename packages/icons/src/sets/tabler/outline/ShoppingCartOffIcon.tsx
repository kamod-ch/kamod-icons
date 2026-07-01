import type { IconProps } from "../../../shared/types";

export function ShoppingCartOffIcon({
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
      <path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0m13-2a2 2 0 1 0 2 2"/><path d="M17 17H6V6m3.239-.769L20 6l-1 7h-2m-4 0H6M3 3l18 18"/>
    </svg>
  );
}
