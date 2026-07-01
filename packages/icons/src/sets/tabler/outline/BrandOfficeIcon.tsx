import type { IconProps } from "../../../shared/types";

export function BrandOfficeIcon({
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
      <path d="M4 18h9V6L8 8v5l-4 2V7l9-4 7 2v13l-7 3z"/>
    </svg>
  );
}
