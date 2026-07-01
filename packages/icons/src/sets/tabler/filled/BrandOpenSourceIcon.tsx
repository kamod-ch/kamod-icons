import type { IconProps } from "../../../shared/types";

export function BrandOpenSourceIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12.283 2.004a10 10 0 0 1 3.736 19.155 1 1 0 0 1-1.332-.551l-2.193-5.602a1 1 0 0 1 .456-1.245 2 2 0 1 0-1.9 0 1 1 0 0 1 .457 1.244l-2.193 5.603a1 1 0 0 1-1.332.552A10 10 0 0 1 12 2z"/>
    </svg>
  );
}
