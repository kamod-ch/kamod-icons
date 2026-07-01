import type { IconProps } from "../../../shared/types";

export function ManualGearboxIcon({
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
      <path d="M3 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 8v8m7-8v8"/><path d="M19 8v2a2 2 0 0 1-2 2H5"/>
    </svg>
  );
}
