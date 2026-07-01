import type { IconProps } from "../../../shared/types";

export function DiscIcon({
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
      <path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M17 11a1 1 0 0 0-1 1 4 4 0 0 1-4 4 1 1 0 0 0 0 2 6 6 0 0 0 6-6 1 1 0 0 0-1-1m-5-1a2 2 0 0 0-1.995 1.85L10 12a2 2 0 1 0 2-2m0-4a6 6 0 0 0-6 6 1 1 0 0 0 2 0 4 4 0 0 1 4-4 1 1 0 0 0 0-2"/>
    </svg>
  );
}
