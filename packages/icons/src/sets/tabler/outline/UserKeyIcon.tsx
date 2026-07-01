import type { IconProps } from "../../../shared/types";

export function UserKeyIcon({
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
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M6 21v-2a4 4 0 0 1 4-4h5m3.5 3.5L15 22l-1.5-1.5m5.054-2.086a2 2 0 1 1 2.828-2.828 2 2 0 0 1-2.828 2.828M16 19l1 1"/>
    </svg>
  );
}
