import type { IconProps } from "../../../shared/types";

export function BrandAsanaIcon({
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
      <path d="M9 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M4 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
