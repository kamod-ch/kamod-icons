import type { IconProps } from "../../../shared/types";

export function FenceIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M19 17v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3zm-8 0v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3zm9-5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM8.707 3.293l2 2A1 1 0 0 1 11 6v5H5V6a1 1 0 0 1 .293-.707l2-2a1 1 0 0 1 1.414 0m8 0 2 2A1 1 0 0 1 19 6v5h-6V6a1 1 0 0 1 .293-.707l2-2a1 1 0 0 1 1.414 0"/>
    </svg>
  );
}
