import type { IconProps } from "../../../shared/types";

export function BrandTerraformIcon({
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
      <path d="M15 15.5 3.524 9.284A1 1 0 0 1 3 8.404V4.35a1.35 1.35 0 0 1 2.03-1.166L15 9v10.65a1.35 1.35 0 0 1-2.03 1.166l-3.474-2.027A1 1 0 0 1 9 17.926V6m6 9.5 5.504-3.21a1 1 0 0 0 .496-.864V7.85a1.35 1.35 0 0 0-2.03-1.166L15 9"/>
    </svg>
  );
}
