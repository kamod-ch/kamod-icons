import type { IconProps } from "../../../shared/types";

export function BrandYandexIcon({
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
      <path d="M15 20V4h-2a4 4 0 0 0-4 4v1a4 4 0 0 0 4 4h2m-6 7 3-7"/>
    </svg>
  );
}
