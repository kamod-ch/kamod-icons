import type { IconProps } from "../../../shared/types";

export function SlidersIcon({
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
      <path fill="currentColor" d="M5 2.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm8 4.5a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5zm-2 11a.75.75 0 0 0 0-1.5H2a.75.75 0 0 0 0 1.5zm8-4.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"/>
    </svg>
  );
}
