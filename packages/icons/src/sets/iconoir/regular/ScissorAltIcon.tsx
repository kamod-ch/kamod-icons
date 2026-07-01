import type { IconProps } from "../../../shared/types";

export function ScissorAltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.236 8a3 3 0 1 0-4.472-4 3 3 0 0 0 4.472 4m0 0L20 16m-9.764 0a3 3 0 1 1-4.472 4 3 3 0 0 1 4.472-4m0 0L20 8"/>
    </svg>
  );
}
