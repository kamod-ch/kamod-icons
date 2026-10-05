import type { IconProps } from "../../shared/types";

export function RouteMarkerIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 3h12v9l-6 6-6-6Z"/><path d="m9.5 8 2.5 2.5L14.5 8"/>
    </svg>
  );
}
