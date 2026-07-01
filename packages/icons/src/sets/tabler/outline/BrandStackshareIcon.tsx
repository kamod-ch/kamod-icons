import type { IconProps } from "../../../shared/types";

export function BrandStackshareIcon({
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
      <path d="M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m4 0h3l3.5 6H17m0-12h-3.5L10 12"/>
    </svg>
  );
}
