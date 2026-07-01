import type { IconProps } from "../../shared/types";

export function GalleryHorizontalEndIcon({
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
      <path d="M2 7v10M6 5v14"/><rect x="10" y="3" rx="2"/>
    </svg>
  );
}
