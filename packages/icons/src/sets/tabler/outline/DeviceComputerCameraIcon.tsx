import type { IconProps } from "../../../shared/types";

export function DeviceComputerCameraIcon({
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
      <path d="M5 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><path d="M9 10a3 3 0 1 0 6 0 3 3 0 1 0-6 0m-1 6-2.091 3.486A1 1 0 0 0 6.766 21h10.468a1 1 0 0 0 .857-1.514L16 16"/>
    </svg>
  );
}
