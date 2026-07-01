import type { IconProps } from "../../shared/types";

export function CurrencyIcon({
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
      <circle cx="12" cy="12" r="8"/><path d="m3 3 3 3m15-3-3 3M3 21l3-3m15 3-3-3"/>
    </svg>
  );
}
