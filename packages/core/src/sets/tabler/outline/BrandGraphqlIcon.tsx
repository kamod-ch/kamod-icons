import type { IconProps } from "../../../shared/types";

export function BrandGraphqlIcon({
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
      <path d="m4 8 8-5 8 5v8l-8 5-8-5z"/><path d="m12 4 7.5 12h-15z"/><path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 18a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0m16 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
    </svg>
  );
}
