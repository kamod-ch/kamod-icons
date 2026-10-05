import type { IconProps } from "../../shared/types";

export function ShoppingListIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M5 3v18h14V3Z"/><path d="m7 8 2 2 4-4m-6 8h10M7 18h10"/>
    </svg>
  );
}
