import type { IconProps } from "../../../shared/types";

export function BrandVechainIcon({
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
      <path d="m20 4-8 16L4 4h2.028a4 4 0 0 1 3.578 2.211L12.5 12"/>
    </svg>
  );
}
