import type { IconProps } from "../../../shared/types";

export function BrandStellarIcon({
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
      <path d="M21 6 4 13v-1c-.004-1.259.234-2.5.81-3.62C6.173 5.694 8.988 4.002 12 4a7.5 7.5 0 0 1 2.61.46M9.38 19.54a8 8 0 0 0 9.81-3.92c.576-1.12.814-2.361.81-3.62v-1L3 18"/>
    </svg>
  );
}
