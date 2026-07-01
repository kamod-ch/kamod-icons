import type { IconProps } from "../../../shared/types";

export function AlarmPlusIcon({
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
      <path d="M5 13a7 7 0 1 0 14 0 7 7 0 1 0-14 0m2-9L4.25 6M17 4l2.75 2M10 13h4m-2-2v4"/>
    </svg>
  );
}
