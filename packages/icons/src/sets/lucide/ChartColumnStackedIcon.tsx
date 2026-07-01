import type { IconProps } from "../../shared/types";

export function ChartColumnStackedIcon({
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
      <path d="M11 13H7m12-4h-4M3 3v16a2 2 0 0 0 2 2h16"/><rect x="15" y="5" rx="1"/><rect x="7" y="8" rx="1"/>
    </svg>
  );
}
