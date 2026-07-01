import type { IconProps } from "../../../shared/types";

export function FaviconIcon({
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
      <path d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm4 2v4"/><path d="M11 10a2 2 0 1 0 0 4m3-2a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
