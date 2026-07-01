import type { IconProps } from "../../../shared/types";

export function BrandDenodoIcon({
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
      <path d="M11 11h2v2h-2zm-7.366 4.634 1.732-1 1 1.732-1.732 1zM11 19h2v2h-2zm7.634-4.366 1.732 1-1 1.732-1.732-1zm-1-7 1.732-1 1 1.732-1.732 1zM11 3h2v2h-2zM3.634 8.366l1-1.732 1.732 1-1 1.732z"/>
    </svg>
  );
}
