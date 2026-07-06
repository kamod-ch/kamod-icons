import type { IconProps } from "../../../shared/types";

export function IroningSteamIcon({
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
      <path d="M12 19v2M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464.81 4.865A1 1 0 0 1 19.82 16H3a7 7 0 0 1 7-7h9.8M8 19l-1 2m9-2 1 2"/>
    </svg>
  );
}
