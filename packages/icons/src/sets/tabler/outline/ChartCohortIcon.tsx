import type { IconProps } from "../../../shared/types";

export function ChartCohortIcon({
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
      <path d="M3 9h18V3H3v18h6V3"/><path d="M3 15h12V3"/>
    </svg>
  );
}
