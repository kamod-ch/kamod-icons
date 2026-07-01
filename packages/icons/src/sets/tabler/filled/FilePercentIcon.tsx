import type { IconProps } from "../../../shared/types";

export function FilePercentIcon({
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
      <path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm2.01 14H14a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m.697-3.707a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414M10.01 12H10a1 1 0 0 0-.117 1.993l.127.007a1 1 0 0 0 0-2m4.989-9.001L19 7h-4z"/>
    </svg>
  );
}
