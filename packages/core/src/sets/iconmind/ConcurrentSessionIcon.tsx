import type { IconProps } from "../../shared/types";

export function ConcurrentSessionIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8l4-4h3.5"/><path d="M6 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0m3-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-1 6a3 3 0 0 1 6 0"/>
    </svg>
  );
}
