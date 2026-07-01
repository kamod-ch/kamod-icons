import type { IconProps } from "../../../shared/types";

export function CoinTakaIcon({
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
      <path d="m8 8 .553-.276A1 1 0 0 1 10 8.618V15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5V14h-1m-6-3h7"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"/>
    </svg>
  );
}
