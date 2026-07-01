import type { IconProps } from "../../../shared/types";

export function BrandPnpmIcon({
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
      <path d="M3 17h4v4H3zm7 0h4v4h-4zm7 0h4v4h-4zm0-7h4v4h-4zm0-7h4v4h-4zm-7 7h4v4h-4zm0-7h4v4h-4zM3 3h4v4H3z"/>
    </svg>
  );
}
