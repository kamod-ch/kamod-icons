import type { IconProps } from "../../../shared/types";

export function BoldIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M12 11.667H8m4 0s3.333 0 3.333-3.334S12 5 12 5H8.6a.6.6 0 0 0-.6.6v6.067m4 0s4 0 4 3.666S12 19 12 19H8.6a.6.6 0 0 1-.6-.6v-6.733"/>
    </svg>
  );
}
