import type { IconProps } from "../../../shared/types";

export function ParkingCircleIcon({
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
      <path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-20 0l.004-.28C2.152 6.327 6.57 2 12 2m1.334 5H10a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 11 16v-3h2.334C14.85 13 16 11.62 16 10s-1.15-3-2.666-3m0 2c.323 0 .666.411.666 1s-.343 1-.666 1H11V9z"/>
    </svg>
  );
}
