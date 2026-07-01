import type { IconProps } from "../../shared/types";

export function MapPinSearchIcon({
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
      <path d="M12.248 21.969a1 1 0 0 1-.849-.17C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0q-.001.63-.112 1.262M22 22l-1.88-1.88"/><circle cx="12" cy="10" r="3"/><circle cx="18" cy="18" r="3"/>
    </svg>
  );
}
