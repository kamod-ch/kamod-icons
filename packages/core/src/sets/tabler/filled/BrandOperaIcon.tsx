import type { IconProps } from "../../../shared/types";

export function BrandOperaIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6c-2.285 0-3.915 2.619-3.997 5.752L8 12c0 3.242 1.655 6 4 6s4-2.758 4-6-1.655-6-4-6"/>
    </svg>
  );
}
