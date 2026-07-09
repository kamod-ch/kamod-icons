import type { IconProps } from "../../../shared/types";

export function Gps3Icon({
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
      <path fill="currentColor" d="M22 11.25h-2.04c-.36-3.81-3.4-6.86-7.21-7.21V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.04c-3.81.36-6.86 3.4-7.21 7.21H2c-.41 0-.75.34-.75.75s.34.75.75.75h2.04c.36 3.81 3.4 6.86 7.21 7.21V22c0 .41.34.75.75.75s.75-.34.75-.75v-2.04c3.81-.36 6.86-3.4 7.21-7.21H22c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-10 3.87c-1.72 0-3.12-1.4-3.12-3.12s1.4-3.12 3.12-3.12 3.12 1.4 3.12 3.12-1.4 3.12-3.12 3.12Z"/>
    </svg>
  );
}
