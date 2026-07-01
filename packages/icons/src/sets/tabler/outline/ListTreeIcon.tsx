import type { IconProps } from "../../../shared/types";

export function ListTreeIcon({
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
      <path d="M9 6h11m-8 6h8m-5 6h5M5 6v.01M8 12v.01M11 18v.01"/>
    </svg>
  );
}
