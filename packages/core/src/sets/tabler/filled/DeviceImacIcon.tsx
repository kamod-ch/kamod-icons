import type { IconProps } from "../../../shared/types";

export function DeviceImacIcon({
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
      <path d="M8 22a1 1 0 0 1 0-2h.616l.25-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4.867l.25 2H16a1 1 0 0 1 0 2zm5.116-4h-2.233l-.25 2h2.733z"/>
    </svg>
  );
}
