import type { IconProps } from "../../../shared/types";

export function CurrencyEuroIcon({
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
      <path d="M17.2 7a6 7 0 1 0 0 10M13 10H5m0 4h8"/>
    </svg>
  );
}
