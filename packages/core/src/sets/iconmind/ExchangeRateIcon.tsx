import type { IconProps } from "../../shared/types";

export function ExchangeRateIcon({
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
      <path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8M4 18h16M6.5 15.5 4 18l2.5 2.5m11-5L20 18l-2.5 2.5"/>
    </svg>
  );
}
