import type { IconProps } from "../../../shared/types";

export function DocumentCode22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M11 22h5c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5H8C4.5 2 3 4 3 7v7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.5 4.5v2c0 1.1.9 2 2 2h2M4 17l-2 2 2 2m3-4 2 2-2 2"/>
    </svg>
  );
}
