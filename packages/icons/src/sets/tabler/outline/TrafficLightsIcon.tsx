import type { IconProps } from "../../../shared/types";

export function TrafficLightsIcon({
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
      <path d="M7 7a5 5 0 0 1 5-5 5 5 0 0 1 5 5v10a5 5 0 0 1-5 5 5 5 0 0 1-5-5z"/><path d="M11 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
