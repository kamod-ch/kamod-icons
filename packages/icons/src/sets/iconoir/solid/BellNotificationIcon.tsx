import type { IconProps } from "../../../shared/types";

export function BellNotificationIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.752 1.914a5.25 5.25 0 0 0 4.07 8.333v.011c.015.198.03.401.05.597.237 2.247.777 3.79 1.296 4.803.345.675.684 1.123.924 1.394a3.4 3.4 0 0 0 .34.335l.01.006A.75.75 0 0 1 21 18.75H3a.75.75 0 0 1-.441-1.356l.008-.007.064-.054c.06-.054.157-.145.277-.281.24-.27.579-.718.924-1.393C4.522 14.31 5.25 12.03 5.25 8.4c0-1.881.7-3.694 1.96-5.038C8.472 2.016 10.194 1.25 12 1.25q.574 0 1.133.101c.238.043 1.018.286 1.619.563" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M15.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M9.894 20.351a.75.75 0 0 1 1.025.273 1.25 1.25 0 0 0 2.162 0 .75.75 0 1 1 1.298.753 2.75 2.75 0 0 1-4.758 0 .75.75 0 0 1 .273-1.026" clipRule="evenodd"/>
    </svg>
  );
}
