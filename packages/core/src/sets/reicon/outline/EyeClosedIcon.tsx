import type { IconProps } from "../../../shared/types";

export function EyeClosedIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.479 9.693c2.42 2.468 5.792 4 9.521 4s7.101-1.53 9.521-4m-16.16 2.23-1.694 2.769m6.066-1.191-.636 3.166m9.542-4.744 1.694 2.769m-6.066-1.191.636 3.166"/>
    </svg>
  );
}
