import type { IconProps } from "../../../shared/types";

export function DeviceImacCancelIcon({
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
      <path d="M12.5 17H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8M3 13h12.5M8 21h4.5M10 17l-.5 4m6.5-2a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4"/>
    </svg>
  );
}
