import type { IconProps } from "../../../shared/types";

export function DeviceAirpodsIcon({
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
      <path d="M6 4a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 0 1-3 0V12H6a4 4 0 0 1-4-3.8V8a4 4 0 0 1 4-4m12 0a4 4 0 0 0-4 3.8v10.7a1.5 1.5 0 0 0 3 0V12h1a4 4 0 0 0 4-3.8V8a4 4 0 0 0-4-4"/>
    </svg>
  );
}
