import type { IconProps } from "../../../shared/types";

export function BrandGravatarIcon({
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
      <path d="M5.64 5.632A9 9 0 1 0 12 3v7.714"/>
    </svg>
  );
}
