import type { IconProps } from "../../../shared/types";

export function BrandDropsIcon({
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
      <path d="M17.637 7.416a7.91 7.91 0 0 1 1.76 8.666A8 8 0 0 1 12 21a8 8 0 0 1-7.396-4.918 7.91 7.91 0 0 1 1.759-8.666L12 2z"/><path d="M14.466 10.923a3.6 3.6 0 0 1 .77 3.877A3.5 3.5 0 0 1 12 17a3.5 3.5 0 0 1-3.236-2.2 3.6 3.6 0 0 1 .77-3.877L12 8.5z"/>
    </svg>
  );
}
