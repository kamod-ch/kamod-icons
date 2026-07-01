import type { IconProps } from "../../../shared/types";

export function Number38SmallIcon({
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
      <path d="M16 12h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M6 8h2.5A1.5 1.5 0 0 1 10 9.5v1A1.5 1.5 0 0 1 8.5 12H7h1.5a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 16H6"/>
    </svg>
  );
}
