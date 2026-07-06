import type { IconProps } from "../../../shared/types";

export function TrendingDown2Icon({
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
      <path d="M3 6h5l7 10h6"/><path d="m18 19 3-3-3-3"/>
    </svg>
  );
}
