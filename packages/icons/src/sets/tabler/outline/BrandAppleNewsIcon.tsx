import type { IconProps } from "../../../shared/types";

export function BrandAppleNewsIcon({
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
      <path d="m4 14 6 6H4zm16-4-6-6h6zM4 4v4l12 12h4v-4L8 4z"/>
    </svg>
  );
}
