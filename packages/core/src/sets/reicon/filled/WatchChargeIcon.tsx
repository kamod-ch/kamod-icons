import type { IconProps } from "../../../shared/types";

export function WatchChargeIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M5.674 6.778C5 7.787 5 9.19 5 12s0 4.213.674 5.222a4 4 0 0 0 1.104 1.104C7.787 19 9.19 19 12 19s4.213 0 5.222-.674a4 4 0 0 0 1.104-1.104C19 16.213 19 14.81 19 12s0-4.213-.674-5.222a4 4 0 0 0-1.104-1.104C16.213 5 14.81 5 12 5s-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104Zm7.7 1.679c.3.286.312.76.026 1.06l-1.65 1.733H14a.75.75 0 0 1 .543 1.267l-2.857 3a.75.75 0 1 1-1.086-1.034l1.65-1.733H10a.75.75 0 0 1-.543-1.267l2.857-3a.75.75 0 0 1 1.06-.026ZM6.25 2A.75.75 0 0 1 7 1.25h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2Zm0 20a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
