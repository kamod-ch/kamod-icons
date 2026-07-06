import type { IconProps } from "../../../shared/types";

export function BrandFortniteIcon({
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
      <path d="M8 3h7.5L15 7h-3v3h3v3.5h-3V20l-4 1z"/>
    </svg>
  );
}
