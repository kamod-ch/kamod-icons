import type { IconProps } from "../../../shared/types";

export function BrandXingIcon({
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
      <path d="m16 21-4-7 6.5-11M7 7l2 3.5L6 15"/>
    </svg>
  );
}
