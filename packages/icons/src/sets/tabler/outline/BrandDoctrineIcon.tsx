import type { IconProps } from "../../../shared/types";

export function BrandDoctrineIcon({
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
      <path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0m4 0h6"/><path d="m12 11 3 3-3 3M10 3l6.9 6"/>
    </svg>
  );
}
