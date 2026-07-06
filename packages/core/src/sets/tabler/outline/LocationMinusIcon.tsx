import type { IconProps } from "../../../shared/types";

export function LocationMinusIcon({
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
      <path d="m12 18-2-4-7-3.5a.55.55 0 0 1 0-1L21 3l-4.347 12.038M16 19h6"/>
    </svg>
  );
}
