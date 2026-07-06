import type { IconProps } from "../../shared/types";

export function CarTaxiFrontIcon({
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
      <path d="M10 2h4m7 6-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8m4 6h.01M17 14h.01"/><rect x="3" y="10" rx="2"/><path d="M5 18v2m14-2v2"/>
    </svg>
  );
}
