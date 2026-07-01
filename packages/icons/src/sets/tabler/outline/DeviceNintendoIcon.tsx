import type { IconProps } from "../../../shared/types";

export function DeviceNintendoIcon({
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
      <path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zm4 0V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z"/><path fill="currentColor" d="M16.5 15.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-11-7a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
