import type { IconProps } from "../../../shared/types";

export function StethoscopeIcon({
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
      <path d="M6 4H5a2 2 0 0 0-2 2v3.5a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 1 0 12 0v-3m-9-9v2M6 3v2"/><path d="M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
