import type { IconProps } from "../../../shared/types";

export function BrandGoogleDriveIcon({
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
      <path d="M12 10 6 20l-3-5L9 5z"/><path d="M9 15h12l-3 5H6m9-5L9 5h6l6 10z"/>
    </svg>
  );
}
