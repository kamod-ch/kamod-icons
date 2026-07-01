import type { IconProps } from "../../../shared/types";

export function DeviceWatchIcon({
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
      <path d="M15 2a1 1 0 0 1 1 1v2.126c1.726.445 3 2.01 3 3.874v6a4 4 0 0 1-3 3.874V21a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.126A4 4 0 0 1 5 15V9a4 4 0 0 1 3-3.874V3a1 1 0 0 1 1-1zm-1 17h-4v1h4zm0-15h-4v1h4z"/>
    </svg>
  );
}
