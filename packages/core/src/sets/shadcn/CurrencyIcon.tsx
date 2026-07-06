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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16M3 3l3 3m15-3-3 3M3 21l3-3m15 3-3-3"/>
    </svg>
  );
}
