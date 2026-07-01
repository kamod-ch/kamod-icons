import type { IconProps } from "../../../shared/types";

export function RippleUpIcon({
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
      <path d="M3 7q4.5-3 9 0t9 0M3 17q4.5-3 9 0 .218.144.434.275M3 12q4.5-3 9 0 1.941 1.294 3.882 1.472M19 22v-6m3 3-3-3-3 3"/>
    </svg>
  );
}
