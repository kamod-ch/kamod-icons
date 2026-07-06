import type { IconProps } from "../../../shared/types";

export function AlarmOffIcon({
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
      <path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35-2.645a7 7 0 0 0-8.536-8.56"/><path d="M12 12v1h1M5.261 5.265 4.25 6M17 4l2.75 2M3 3l18 18"/>
    </svg>
  );
}
