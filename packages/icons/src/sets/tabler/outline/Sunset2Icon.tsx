import type { IconProps } from "../../../shared/types";

export function Sunset2Icon({
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
      <path d="M3 13h1m16 0h1M5.6 6.6l.7.7m12.1-.7-.7.7M8 13a4 4 0 1 1 8 0M3 17h18M7 20h5m4 0h1M12 5V4"/>
    </svg>
  );
}
