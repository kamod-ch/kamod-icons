import type { IconProps } from "../../../shared/types";

export function StickerIcon({
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
      <path d="m20 12-2 .5A6 6 0 0 1 11.5 6l.5-2z"/><path d="M20 12a8 8 0 1 1-8-8"/>
    </svg>
  );
}
