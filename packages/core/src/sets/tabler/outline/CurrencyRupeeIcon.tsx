import type { IconProps } from "../../../shared/types";

export function CurrencyRupeeIcon({
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
      <path d="M18 5H7h3a4 4 0 0 1 0 8H7l6 6M7 9h11"/>
    </svg>
  );
}
