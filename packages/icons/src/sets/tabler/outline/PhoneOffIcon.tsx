import type { IconProps } from "../../../shared/types";

export function PhoneOffIcon({
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
      <path d="M3 21 21 3M5.831 14.161A15.95 15.95 0 0 1 3 6a2 2 0 0 1 2-2h4l2 5-2.5 1.5q.162.33.345.645m1.751 2.277A11 11 0 0 0 13.5 15.5L15 13l5 2v4a2 2 0 0 1-2 2 15.96 15.96 0 0 1-10.344-4.657"/>
    </svg>
  );
}
