import type { IconProps } from "../../../shared/types";

export function TopologyBusIcon({
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
      <path d="M14 10a2 2 0 1 0-4 0 2 2 0 0 0 4 0m-8 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0m16 0a2 2 0 1 0-4 0 2 2 0 0 0 4 0M2 16h20M4 12v4m8-4v4m8-4v4"/>
    </svg>
  );
}
