import type { IconProps } from "../../../shared/types";

export function IceCreamIcon({
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
      <path d="M12 21.5V17m-4 0h8V7a4 4 0 1 0-8 0zm0-6.5L16 7m-8 7.5 8-3.5"/>
    </svg>
  );
}
