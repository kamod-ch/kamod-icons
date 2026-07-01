import type { IconProps } from "../../../shared/types";

export function FileDotsIcon({
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
      <path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zM9 14a1 1 0 0 0-.993.883L8 15.01a1 1 0 0 0 1.993.117L10 15a1 1 0 0 0-1-1m3 0a1 1 0 0 0-.993.883L11 15.01a1 1 0 0 0 1.993.117L13 15a1 1 0 0 0-1-1m3 0a1 1 0 0 0-.993.883L14 15.01a1 1 0 0 0 1.993.117L16 15a1 1 0 0 0-1-1"/><path d="M19 7h-4l-.001-4.001z"/>
    </svg>
  );
}
