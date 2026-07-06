import type { IconProps } from "../../../shared/types";

export function CircuitBatteryIcon({
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
      <path d="M2 12h4m12 0h4m-4-7v14M14 9v6M10 5v14M6 9v6"/>
    </svg>
  );
}
