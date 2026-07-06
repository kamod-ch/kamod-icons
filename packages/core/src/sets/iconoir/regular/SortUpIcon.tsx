import type { IconProps } from "../../../shared/types";

export function SortUpIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 14H2m8-4H2m4-4H2m16 12H2m17-4V4m0 0 3 3m-3-3-3 3"/>
    </svg>
  );
}
