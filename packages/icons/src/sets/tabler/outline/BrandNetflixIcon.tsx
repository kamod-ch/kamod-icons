import type { IconProps } from "../../../shared/types";

export function BrandNetflixIcon({
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
      <path d="m9 3 10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5"/>
    </svg>
  );
}
