import type { IconProps } from "../../../shared/types";

export function NotificationIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.667 11.658v6.675A2.666 2.666 0 0 1 17 21H5.667A2.666 2.666 0 0 1 3 18.333V7a2.666 2.666 0 0 1 2.667-2.667h6.675m6.991 3.334a3 3 0 1 0 .002-6 3 3 0 0 0-.002 6"/>
    </svg>
  );
}
