import type { IconProps } from "../../../shared/types";

export function ChartAreaIcon({
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
      <path d="M4 19h16M4 15l4-6 4 2 4-5 4 4v5z"/>
    </svg>
  );
}
