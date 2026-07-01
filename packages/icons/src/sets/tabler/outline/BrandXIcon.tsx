import type { IconProps } from "../../../shared/types";

export function BrandXIcon({
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
      <path d="m4 4 11.733 16H20L8.267 4zm0 16 6.768-6.768m2.46-2.46L20 4"/>
    </svg>
  );
}
