import type { IconProps } from "../../../shared/types";

export function DeviceSpeakerIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 9a4 4 0 0 0-3.995 3.8L8 15a4 4 0 1 0 4-4m0-5a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1"/>
    </svg>
  );
}
