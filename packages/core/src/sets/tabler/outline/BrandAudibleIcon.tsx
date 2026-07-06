import type { IconProps } from "../../../shared/types";

export function BrandAudibleIcon({
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
      <path d="M18.46 9.75a9 9 0 0 0-12.92 0m8.8 1.83a5 5 0 0 0-4.68 0M22 13l-10 4-10-4"/>
    </svg>
  );
}
