import type { IconProps } from "../../../shared/types";

export function BrandSublimeTextIcon({
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
      <path d="M19 8 5 12.5V7l14-4.5zm0 9L5 21.5V16l14-4.5zm0-5.5L5 7m0 5.5L19 17"/>
    </svg>
  );
}
