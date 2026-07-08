import type { IconProps } from "../../../shared/types";

export function ForkliftIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M11.25 13.5V9.036a2 2 0 0 0-.08-.56L9.71 3.47a1 1 0 0 0-.96-.72h-3a1 1 0 0 0-1 1v5m-.519 4.5H7.75"/><path d="M11.176 8.75H2.75a2 2 0 0 0-2 2v2.75m16.5 1.75h-2.5a1 1 0 0 1-1-1V1.75"/><circle cx="2.5" cy="13.5" r="1.75"/><circle cx="9.5" cy="13.5" r="1.75"/></g>
    </svg>
  );
}
