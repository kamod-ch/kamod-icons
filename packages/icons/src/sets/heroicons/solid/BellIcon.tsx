import type { IconProps } from "../../../shared/types";

export function BellIcon({
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
      <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.6 24.6 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.22 8.22 0 0 0 5.25 9.75zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25 25 0 0 1-4.496 0" clipRule="evenodd"/>
    </svg>
  );
}
