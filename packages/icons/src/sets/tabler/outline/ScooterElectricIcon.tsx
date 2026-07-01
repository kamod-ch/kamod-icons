import type { IconProps } from "../../../shared/types";

export function ScooterElectricIcon({
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
      <path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1m-5-1L8 8h3l-2 4"/>
    </svg>
  );
}
