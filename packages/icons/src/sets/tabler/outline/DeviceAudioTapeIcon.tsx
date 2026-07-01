import type { IconProps } from "../../../shared/types";

export function DeviceAudioTapeIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 17 4-3h10l4 3"/><path fill="currentColor" d="M7 9.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0m9 0a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/>
    </svg>
  );
}
