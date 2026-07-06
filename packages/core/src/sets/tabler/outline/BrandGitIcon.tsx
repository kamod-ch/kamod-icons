import type { IconProps } from "../../../shared/types";

export function BrandGitIcon({
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
      <path d="M15 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4-4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m1-1V9m3 2-2-2m-2-2L9.1 5.1"/><path d="m13.446 2.6 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0"/>
    </svg>
  );
}
