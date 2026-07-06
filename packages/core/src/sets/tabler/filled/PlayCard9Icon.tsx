import type { IconProps } from "../../../shared/types";

export function PlayCard9Icon({
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
      <path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M13 8h-2a2 2 0 0 0-2 2v1l.005.15A2 2 0 0 0 11 13h2v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v1h-2v-1zM7.01 4H7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2"/>
    </svg>
  );
}
