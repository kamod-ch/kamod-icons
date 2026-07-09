import type { IconProps } from "../../../shared/types";

export function Ruler4Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M5 17h14q3 0 3-3v-4q0-3-3-3H5q-3 0-3 3v4q0 3 3 3ZM18 7v5M6 7v4m4.05-4L10 12m4-5v3"/>
    </svg>
  );
}
