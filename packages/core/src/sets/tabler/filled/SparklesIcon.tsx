import type { IconProps } from "../../../shared/types";

export function SparklesIcon({
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
      <path d="M16 19a1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-1.333 2-1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0-1 1c0 1.333-2 1.333-2 0a1 1 0 0 0-1-1M3 11a5 5 0 0 0 5-5c0-1.333 2-1.333 2 0a5 5 0 0 0 5 5c1.333 0 1.333 2 0 2a5 5 0 0 0-5 5 1 1 0 0 1-2 0 5 5 0 0 0-5-5c-1.333 0-1.333-2 0-2m13-4a1 1 0 0 1 0-2 1 1 0 0 0 1-1c0-1.333 2-1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0-1 1c0 1.333-2 1.333-2 0a1 1 0 0 0-1-1"/>
    </svg>
  );
}
