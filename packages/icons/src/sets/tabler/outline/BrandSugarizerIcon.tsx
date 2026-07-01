import type { IconProps } from "../../../shared/types";

export function BrandSugarizerIcon({
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
      <path d="m14.277 16 3.252-3.252a1.61 1.61 0 0 0-2.277-2.276L12 13.723l-3.252-3.251a1.61 1.61 0 0 0-2.276 2.276L9.723 16l-3.251 3.252a1.61 1.61 0 1 0 2.276 2.277L12 18.277l3.252 3.252a1.61 1.61 0 1 0 2.277-2.277zM9 5a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
