import type { IconProps } from "../../../shared/types";

export function TopologyRingIcon({
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
      <path d="M14 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0m0-16a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8.5-6.5 5 5m-13 3 5 5m3 0 5-5m-8-8-5 5"/>
    </svg>
  );
}
