import type { IconProps } from "../../../shared/types";

export function BellSlashIcon({
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
      <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06zm17.04 14.006q-.335.123-.674.238L7.319 4.137A6.75 6.75 0 0 1 18.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206Z"/><path fillRule="evenodd" d="M5.25 9q0-.276.022-.546l10.384 10.384a3.751 3.751 0 0 1-7.396-1.119 24.6 24.6 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.22 8.22 0 0 0 5.25 9.75zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25 25 0 0 1-4.496 0" clipRule="evenodd"/>
    </svg>
  );
}
