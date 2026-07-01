import type { IconProps } from "../../../shared/types";

export function MarqueeIcon({
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
      <path d="M4 6a2 2 0 0 1 2-2m3 0h1.5m3 0H15m3 0a2 2 0 0 1 2 2m0 3v1.5m0 3V15m0 3a2 2 0 0 1-2 2m-3 0h-1.5m-3 0H9m-3 0a2 2 0 0 1-2-2m0-3v-1.5m0-3V9m0-3"/>
    </svg>
  );
}
