import type { IconProps } from "../../../shared/types";

export function SignalStreamIcon({
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
      <path fill="currentColor" d="M21.25 12c0-2.487-1.045-4.759-2.775-6.466a.75.75 0 0 1 1.054-1.068C21.519 6.43 22.75 9.078 22.75 12s-1.232 5.57-3.223 7.535a.75.75 0 0 1-1.054-1.068c1.732-1.708 2.777-3.98 2.777-6.467Z"/><path fill="currentColor" fillRule="evenodd" d="M12 9.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM11.25 12a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M15.473 9.038A4.1 4.1 0 0 1 16.745 12c0 1.148-.48 2.193-1.272 2.962a.75.75 0 1 0 1.045 1.076A5.6 5.6 0 0 0 18.245 12c0-1.58-.664-3.006-1.727-4.038a.75.75 0 0 0-1.045 1.076ZM2.75 12c0-2.487 1.045-4.759 2.775-6.466A.75.75 0 1 0 4.47 4.466C2.481 6.43 1.25 9.078 1.25 12s1.232 5.57 3.223 7.535a.75.75 0 0 0 1.054-1.068C3.795 16.759 2.75 14.487 2.75 12Z"/><path fill="currentColor" d="M8.527 9.038A4.1 4.1 0 0 0 7.255 12c0 1.148.48 2.193 1.272 2.962a.75.75 0 1 1-1.045 1.076A5.6 5.6 0 0 1 5.755 12c0-1.58.664-3.006 1.727-4.038a.75.75 0 1 1 1.045 1.076Z"/>
    </svg>
  );
}
