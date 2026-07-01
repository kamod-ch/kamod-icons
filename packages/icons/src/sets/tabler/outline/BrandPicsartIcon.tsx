import type { IconProps } from "../../../shared/types";

export function BrandPicsartIcon({
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
      <path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9"/><path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M5 9v11a2 2 0 1 0 4 0v-4.5"/>
    </svg>
  );
}
