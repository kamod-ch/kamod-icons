import type { IconProps } from "../../shared/types";

export function ChartCandlestickIcon({
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
      <path d="M9 5v4"/><rect x="7" y="9" rx="1"/><path d="M9 15v2m8-14v2"/><rect x="15" y="5" rx="1"/><path d="M17 13v3M3 3v16a2 2 0 0 0 2 2h16"/>
    </svg>
  );
}
