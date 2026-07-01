import type { IconProps } from "../../../shared/types";

export function CornerLeftUpDoubleIcon({
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
      <path d="M18 19h-6a3 3 0 0 1-3-3V9"/><path d="M13 13 9 9l-4 4m8-5L9 4 5 8"/>
    </svg>
  );
}
