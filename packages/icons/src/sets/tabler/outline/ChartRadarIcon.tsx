import type { IconProps } from "../../../shared/types";

export function ChartRadarIcon({
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
      <path d="m12 3 9.5 7L18 21H6L2.5 10z"/><path d="m12 7.5 5.5 4L15 17H8.5l-2-5.5z"/><path d="m2.5 10 9.5 3 9.5-3"/><path d="M12 3v10l6 8M6 21l6-8"/>
    </svg>
  );
}
