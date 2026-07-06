import type { IconProps } from "../../../shared/types";

export function DeviceTabletShareIcon({
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
      <path d="M12 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9"/><path d="M12.57 16.178a1 1 0 1 0 .016 1.633M16 22l5-5m0 4.5V17h-4.5"/>
    </svg>
  );
}
