import type { IconProps } from "../../../shared/types";

export function BrandAzureIcon({
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
      <path d="M6 7.5 2 17h4l6-15zM22 20 15 5l-3 7 4 5-8 3z"/>
    </svg>
  );
}
