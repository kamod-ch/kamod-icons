import type { IconProps } from "../../shared/types";

export function RoadworksIcon({
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
      <path d="M5 9a7 7 0 1 0 14 0A7 7 0 1 0 5 9m7 7v6m0-17.5V9"/><path d="M9.5 9v3.5h5V9Z"/>
    </svg>
  );
}
