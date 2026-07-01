import type { IconProps } from "../../../shared/types";

export function BrandCitymapperIcon({
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
      <path d="M3 11a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zm18 0a1 1 0 1 1-1 1.013 1 1 0 0 1 1-1zM8 12h8m-3-3 3 3-3 3"/>
    </svg>
  );
}
