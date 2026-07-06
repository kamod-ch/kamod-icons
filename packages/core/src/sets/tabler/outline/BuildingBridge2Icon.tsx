import type { IconProps } from "../../../shared/types";

export function BuildingBridge2Icon({
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
      <path d="M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a4 4 0 0 0-8 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2"/>
    </svg>
  );
}
