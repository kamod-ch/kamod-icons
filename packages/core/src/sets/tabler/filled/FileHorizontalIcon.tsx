import type { IconProps } from "../../../shared/types";

export function FileHorizontalIcon({
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
      <path d="m22 12-.007-.117a1 1 0 0 0-.876-.876L21 11h-4l-.15-.005a2 2 0 0 1-1.844-1.838L15 9V5l-.007-.117a1 1 0 0 0-.876-.876L14 4H5a3 3 0 0 0-2.995 2.824L2 7v10a3 3 0 0 0 2.824 2.995L5 20h14a3 3 0 0 0 2.995-2.824L22 17z"/><path d="M17 5v4l4.001.001z"/>
    </svg>
  );
}
