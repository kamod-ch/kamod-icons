import type { IconProps } from "../../../shared/types";

export function BrandVisualStudioIcon({
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
      <path d="m4 8 2-1 10 13 4-2V6l-4-2L6 17l-2-1z"/>
    </svg>
  );
}
