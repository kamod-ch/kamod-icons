import type { IconProps } from "../../../shared/types";

export function PinTackIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M12 22.667a1 1 0 0 1-1-1v-5.334a1 1 0 0 1 2 0v5.334a1 1 0 0 1-1 1Z"/><path d="M18.572 11.996a11 11 0 0 0-1.239-1.717V5a3.67 3.67 0 0 0-3.666-3.667h-3.334A3.67 3.67 0 0 0 6.667 5v5.279a11 11 0 0 0-1.239 1.717 11.1 11.1 0 0 0-1.42 4.21A1 1 0 0 0 5 17.333h14a1.002 1.002 0 0 0 .992-1.125 11.1 11.1 0 0 0-1.42-4.211Z"/></g>
    </svg>
  );
}
