import type { IconProps } from "../../../shared/types";

export function BrandViteIcon({
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
      <path d="M10 4.5 16 3l-2 6.5 2-.5-4 7v-5l-3 1z"/><path d="M15 6.5 22 5 12 22 2 5l7.741 1.5"/>
    </svg>
  );
}
