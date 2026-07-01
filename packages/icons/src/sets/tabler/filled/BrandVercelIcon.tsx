import type { IconProps } from "../../../shared/types";

export function BrandVercelIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11.143 3.486a1 1 0 0 1 1.714 0l9 15A1 1 0 0 1 21 20H3a1 1 0 0 1-.857-1.514z"/>
    </svg>
  );
}
