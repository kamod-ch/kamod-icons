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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M19.333 8a3.333 3.333 0 1 0 0-6.667 3.333 3.333 0 0 0 0 6.667Z"/><path fillRule="evenodd" d="M5.667 5.333C4.746 5.333 4 6.08 4 7v11.333C4 19.254 4.746 20 5.667 20H17c.921 0 1.667-.746 1.667-1.667v-6.675a1 1 0 0 1 2 0v6.675A3.666 3.666 0 0 1 17 22H5.667A3.666 3.666 0 0 1 2 18.333V7a3.666 3.666 0 0 1 3.667-3.667h6.675a1 1 0 0 1 0 2z" clipRule="evenodd"/></g>
    </svg>
  );
}
