import type { IconProps } from "../../../shared/types";

export function ParkingMeterIcon({
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
      <path d="M15 9a3 3 0 0 0-6 0m3 10v3"/><path d="M10.938 19h2.122a4.04 4.04 0 0 0 3.868-2.82l1.775-5.68c1.082-3.463-.882-7.138-4.386-8.208A6.7 6.7 0 0 0 12.357 2h-.716C7.973 2 5 4.939 5 8.563c0 .657.1 1.31.296 1.937l1.775 5.68A4.04 4.04 0 0 0 10.938 19M11 12h2m-1 0v3"/>
    </svg>
  );
}
