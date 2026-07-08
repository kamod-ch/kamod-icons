import type { IconProps } from "../../../shared/types";

export function AspectRatioSquare2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M17.667 2.667H6.333a3.67 3.67 0 0 0-3.666 3.666v11.334a3.67 3.67 0 0 0 3.666 3.666h11.334a3.67 3.67 0 0 0 3.666-3.666V6.333a3.67 3.67 0 0 0-3.666-3.666ZM11 18H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2Zm7-7a1 1 0 0 1-2 0V8h-3a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1z"/>
    </svg>
  );
}
