import type { IconProps } from "../../shared/types";

export function DustStormIcon({
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
      <path d="M3 6h14m0 0 3-3M5 11h14m0 0 3-3M3 16h12m-6 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
