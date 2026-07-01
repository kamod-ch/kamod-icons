import type { IconProps } from "../../../shared/types";

export function ChartArrowsVerticalIcon({
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
      <path d="M18 21V7m-9 8 3-3 3 3m0-5 3-3 3 3M3 21h18m-9 0v-9M3 6l3-3 3 3M6 21V3"/>
    </svg>
  );
}
