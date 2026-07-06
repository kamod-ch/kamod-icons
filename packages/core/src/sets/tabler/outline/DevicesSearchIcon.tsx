import type { IconProps } from "../../../shared/types";

export function DevicesSearchIcon({
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
      <path d="M13 13V9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2.5"/><path d="M18 8V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7m4 0a3 3 0 1 0 6 0 3 3 0 1 0-6 0m5.2 2.2L22 22M16 9h2"/>
    </svg>
  );
}
