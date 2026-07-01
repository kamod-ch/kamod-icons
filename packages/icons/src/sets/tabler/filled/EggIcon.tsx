import type { IconProps } from "../../../shared/types";

export function EggIcon({
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
      <path d="M12.002 2C7.829 1.992 4 8.058 4 14.083 4 18.791 7.25 22 12 22c4.727-.206 8-3.328 8-7.917C20 8.063 16.175 2.008 12.002 2"/>
    </svg>
  );
}
