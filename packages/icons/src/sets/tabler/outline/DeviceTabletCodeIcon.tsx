import type { IconProps } from "../../../shared/types";

export function DeviceTabletCodeIcon({
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
      <path d="M11.5 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9"/><path d="M12.344 16.06a1 1 0 0 0-1.07 1.627M20 21l2-2-2-2m-3 0-2 2 2 2"/>
    </svg>
  );
}
