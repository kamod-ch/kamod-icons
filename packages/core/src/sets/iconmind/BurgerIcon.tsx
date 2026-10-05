import type { IconProps } from "../../shared/types";

export function BurgerIcon({
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
      <path d="M5 9c0-4 3-7 7-7s7 3 7 7Zm0 3h14M5 15h14v3a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3Z"/>
    </svg>
  );
}
