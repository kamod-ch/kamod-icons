import type { IconProps } from "../../../shared/types";

export function DeviceCameraPhoneIcon({
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
      <path d="M16 8.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M13 7H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-2m-3 1v-1"/>
    </svg>
  );
}
