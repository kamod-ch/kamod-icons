import type { IconProps } from "../../../shared/types";

export function SlideshowIcon({
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
      <path d="M15 6h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"/><path d="m3 13 4-4a3 5 0 0 1 3 0l4 4"/><path d="m13 12 2-2a3 5 0 0 1 3 0l3 3M8 21h.01M12 21h.01M16 21h.01"/>
    </svg>
  );
}
