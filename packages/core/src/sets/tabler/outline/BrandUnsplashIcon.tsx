import type { IconProps } from "../../../shared/types";

export function BrandUnsplashIcon({
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
      <path d="M4 11h5v4h6v-4h5v9H4zm5-7h6v4H9z"/>
    </svg>
  );
}
