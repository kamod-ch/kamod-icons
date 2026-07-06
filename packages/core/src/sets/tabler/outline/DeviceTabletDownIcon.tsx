import type { IconProps } from "../../../shared/types";

export function DeviceTabletDownIcon({
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
      <path d="M12.5 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8m0 4v6m3-3-3 3-3-3"/><path d="M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
    </svg>
  );
}
