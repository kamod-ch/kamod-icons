import type { IconProps } from "../../../shared/types";

export function CurrencyEthereumIcon({
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
      <path d="m6 12 6-9 6 9-6 9z"/><path d="m6 12 6-3 6 3-6 2z"/>
    </svg>
  );
}
