import type { IconProps } from "../../../shared/types";

export function ArrowLeftSquareIcon({
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
      <path d="M17 12H3m3-3-3 3 3 3m15-1h-4v-4h4z"/>
    </svg>
  );
}
