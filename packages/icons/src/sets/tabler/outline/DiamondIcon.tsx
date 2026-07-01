import type { IconProps } from "../../../shared/types";

export function DiamondIcon({
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
      <path d="M6 5h12l3 5-8.5 9.5a.7.7 0 0 1-1 0L3 10z"/><path d="M10 12 8 9.8l.6-1"/>
    </svg>
  );
}
