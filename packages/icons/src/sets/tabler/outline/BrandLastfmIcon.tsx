import type { IconProps } from "../../../shared/types";

export function BrandLastfmIcon({
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
      <path d="M20 8c-.83-1-1.388-1-2-1s-2 .271-2 2 1.384 2.233 3 3 2.125 1.812 2 3-1 2-3 2-3-1-3.5-2-1.585-4.78-2.497-6a5 5 0 1 0-1 7"/>
    </svg>
  );
}
