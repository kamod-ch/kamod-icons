import type { IconProps } from "../../../shared/types";

export function BrandWindyIcon({
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
      <path d="M9 4c0 5.5-.33 16 4 16s7.546-11.27 8-13"/><path d="M3 4c.253 5.44 1.449 16 5.894 16C13.338 20 17.314 9.964 18 6"/>
    </svg>
  );
}
