import type { IconProps } from "../../../shared/types";

export function MagnifierFaceWorriedIcon({
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
      <g fill="currentColor" fillRule="evenodd" strokeWidth="1.333" clipRule="evenodd"><path d="M14.811 14.811a1 1 0 0 1 1.414 0l5.482 5.482a1 1 0 1 1-1.414 1.414l-5.482-5.482a1 1 0 0 1 0-1.414Z"/><path d="M2 10.333a8.333 8.333 0 1 1 16.667 0 8.333 8.333 0 0 1-16.667 0Zm6.667-1a1.334 1.334 0 1 1-2.667 0 1.334 1.334 0 0 1 2.667 0Zm4.666 1.334a1.334 1.334 0 1 0 0-2.667 1.334 1.334 0 0 0 0 2.667ZM11.89 14.11H8.778A.78.78 0 0 1 8 13.333a2.334 2.334 0 0 1 4.667 0c0 .43-.349.778-.778.778Z"/></g>
    </svg>
  );
}
