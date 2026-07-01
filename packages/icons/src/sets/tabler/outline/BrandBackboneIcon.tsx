import type { IconProps } from "../../../shared/types";

export function BrandBackboneIcon({
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
      <path d="m5 20 14-8L5 4z"/><path d="M19 20 5 12l14-8z"/>
    </svg>
  );
}
