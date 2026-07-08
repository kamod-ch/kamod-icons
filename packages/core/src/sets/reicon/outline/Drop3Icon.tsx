import type { IconProps } from "../../../shared/types";

export function Drop3Icon({
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
      <path stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.5" d="M12.61 2.21a.99.99 0 0 0-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7Z"/>
    </svg>
  );
}
