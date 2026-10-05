import type { IconProps } from "../../shared/types";

export function CurrencyExchangeIcon({
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
      <path d="M2.5 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0M7 5.5v5M12.5 8a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0M17 5.5v5M4 18h16M6.5 15.5 4 18l2.5 2.5m11-5L20 18l-2.5 2.5"/>
    </svg>
  );
}
