import type { IconProps } from "../../../shared/types";

export function BrandNpmIcon({
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
      <path d="M1 8h22v7H11v2H7v-2H1zm6 0v7m7-7v7m3-4v4M4 11v4m7-4v1m9-1v4"/>
    </svg>
  );
}
