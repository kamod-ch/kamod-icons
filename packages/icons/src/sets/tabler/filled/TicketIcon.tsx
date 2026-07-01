import type { IconProps } from "../../../shared/types";

export function TicketIcon({
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
      <path d="M14 4v2a1 1 0 0 0 2 0V4h3a3 3 0 0 1 3 3v3a1 1 0 0 1-.883.993L21 11a1 1 0 0 0-.117 1.993L21 13a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3v-2a1 1 0 0 0-.883-.993L15 17a1 1 0 0 0-1 1v2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 .883-.993L3 13a1 1 0 0 0 .117-1.993L3 11a1 1 0 0 1-1-1V7a2.995 2.995 0 0 1 2.727-2.985l.222-.014zm1 6a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1"/>
    </svg>
  );
}
