import type { IconProps } from "../../shared/types";

export function SpyCallIcon({
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
      <path d="M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8l4-4h2.5"/><path d="M7.3 10.29a5 5 0 0 1 9.4 0"/><path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
