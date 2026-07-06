import type { IconProps } from "../../../shared/types";

export function DevicesPcOffIcon({
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
      <path d="M9 9v10H3V5h2m8 4h9v7h-2m-4 0h-4v-4m2 7h5m-2-2v2M6 13v.01M6 16v.01M3 3l18 18"/>
    </svg>
  );
}
