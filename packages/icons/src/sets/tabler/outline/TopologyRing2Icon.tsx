import type { IconProps } from "../../../shared/types";

export function TopologyRing2Icon({
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
      <path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0m14 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18h10m1-2-5-8m-2 0-5 8"/>
    </svg>
  );
}
