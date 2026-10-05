import type { IconProps } from "../../shared/types";

export function KitchenBinIcon({
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
      <path d="M6 9c.5 4 1 8 2 11h8c1-3 1.5-7 2-11M3 8h18M10 5v3m4-3v3"/>
    </svg>
  );
}
