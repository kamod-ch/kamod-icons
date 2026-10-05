import type { IconProps } from "../../shared/types";

export function MarketClosedIcon({
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
      <path d="M3 18h18M12 3a6.5 6.5 0 1 0 6.5 9.5A5.5 5.5 0 0 1 12 3"/>
    </svg>
  );
}
