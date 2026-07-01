import type { IconProps } from "../../../shared/types";

export function BrandMetabrainzIcon({
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
      <path d="M3 7v10l7 4V3zm18 0v10l-7 4V3z"/>
    </svg>
  );
}
