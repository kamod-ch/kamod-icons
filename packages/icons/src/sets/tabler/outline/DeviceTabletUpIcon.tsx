import type { IconProps } from "../../../shared/types";

export function DeviceTabletUpIcon({
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
      <path d="M12.5 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"/><path d="M12.906 16.576A1 1 0 1 0 12 18m7 4v-6m3 3-3-3-3 3"/>
    </svg>
  );
}
