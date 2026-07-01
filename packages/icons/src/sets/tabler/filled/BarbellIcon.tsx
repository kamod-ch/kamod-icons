import type { IconProps } from "../../../shared/types";

export function BarbellIcon({
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
      <path d="M4 7a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0v-3H2a1 1 0 0 1 0-2h1V8a1 1 0 0 1 1-1m16 0a1 1 0 0 1 1 1v3h1a1 1 0 0 1 0 2h-1v3a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m-4-2a2 2 0 0 1 2 2v10a2 2 0 1 1-4 0v-4h-4v4a2 2 0 1 1-4 0V7a2 2 0 1 1 4 0v4h4V7a2 2 0 0 1 2-2"/>
    </svg>
  );
}
