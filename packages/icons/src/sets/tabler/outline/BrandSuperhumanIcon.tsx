import type { IconProps } from "../../../shared/types";

export function BrandSuperhumanIcon({
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
      <path d="m16 12 4 3-8 7-8-7 4-3"/><path d="M12 3 4 9l8 6 8-6zm0 12h8"/>
    </svg>
  );
}
