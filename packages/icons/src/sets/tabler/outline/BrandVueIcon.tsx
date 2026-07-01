import type { IconProps } from "../../../shared/types";

export function BrandVueIcon({
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
      <path d="M16.5 4 12 12 7.5 4"/><path d="m3 4 9 16 9-16"/>
    </svg>
  );
}
