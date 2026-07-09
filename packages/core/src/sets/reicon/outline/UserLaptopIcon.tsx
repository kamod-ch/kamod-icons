import type { IconProps } from "../../../shared/types";

export function UserLaptopIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.667 11a4.334 4.334 0 1 0-.002-8.668A4.334 4.334 0 0 0 10.667 11m-8.063 8.333a9.65 9.65 0 0 1 7.341-4.307M19.9 21h-8.233l2.49-5.6a.67.67 0 0 1 .61-.4h7.208c.482 0 .805.493.609.933L20.509 20.6a.67.67 0 0 1-.609.4m-8.233 0h-4"/>
    </svg>
  );
}
