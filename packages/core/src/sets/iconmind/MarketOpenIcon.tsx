import type { IconProps } from "../../shared/types";

export function MarketOpenIcon({
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
      <path d="M6 17a6 6 0 0 1 12 0M3 17h18M12 6v2.5m-7.5 1 2 2m13-2-2 2"/>
    </svg>
  );
}
