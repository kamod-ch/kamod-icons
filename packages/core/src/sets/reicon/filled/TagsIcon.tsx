import type { IconProps } from "../../../shared/types";

export function TagsIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M21.085 10.751a1 1 0 0 1-.707-.293l-7.694-7.694a.33.33 0 0 0-.236-.097H5a1 1 0 0 1 0-2h7.448c.617 0 1.22.25 1.652.686l7.692 7.691a1 1 0 0 1-.707 1.707Z"/><path d="M18.906 12.159 12.1 5.353a2.34 2.34 0 0 0-1.652-.686H3a1 1 0 0 0-1 1v7.448c0 .621.242 1.207.684 1.65l6.808 6.808c.715.715 1.654 1.072 2.593 1.072s1.877-.357 2.592-1.072l4.23-4.23a3.67 3.67 0 0 0 0-5.184ZM7.666 12a1.667 1.667 0 1 1 0-3.333 1.667 1.667 0 0 1 0 3.333Z"/></g>
    </svg>
  );
}
