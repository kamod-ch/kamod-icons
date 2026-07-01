import type { IconProps } from "../../../shared/types";

export function Car4wdIcon({
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
      <path d="M17 2a3 3 0 0 1 3 3v2a3 3 0 0 1-6 0h-1v10h1a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0h-4a3 3 0 0 1-6 0v-2a3 3 0 0 1 6 0h1V7h-1a3 3 0 1 1-6 0V5a3 3 0 1 1 6 0h4a3 3 0 0 1 3-3"/>
    </svg>
  );
}
