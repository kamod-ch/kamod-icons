import type { IconProps } from "../../../shared/types";

export function Buildings5Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M13 22H5q-3 0-3-3v-8q0-3 3-3h5v11q0 3 3 3M10.11 4c-.08.3-.11.63-.11 1v3H5V6c0-1.1.9-2 2-2zM14 8v5m4-5v5m-1 4h-2c-.55 0-1 .45-1 1v4h4v-4c0-.55-.45-1-1-1M6 13v4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M10 19V5q0-3 3-3h6q3 0 3 3v14q0 3-3 3h-6q-3 0-3-3"/>
    </svg>
  );
}
