import type { IconProps } from "../../../shared/types";

export function BrandJuejinIcon({
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
      <path d="m2 12 10 7.422L22 12"/><path d="m7 9 5 4 5-4m-6-3 1 .8 1-.8-1-.8z"/>
    </svg>
  );
}
