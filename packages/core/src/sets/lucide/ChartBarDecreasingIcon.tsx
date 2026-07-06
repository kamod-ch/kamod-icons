import type { IconProps } from "../../shared/types";

export function ChartBarDecreasingIcon({
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
      <path d="M3 3v16a2 2 0 0 0 2 2h16M7 11h8m-8 5h3M7 6h12"/>
    </svg>
  );
}
