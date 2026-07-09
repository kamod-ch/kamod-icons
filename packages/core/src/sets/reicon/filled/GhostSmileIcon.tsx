import type { IconProps } from "../../../shared/types";

export function GhostSmileIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M22 12v7.206a1.727 1.727 0 0 1-2.5 1.544 2.89 2.89 0 0 0-2.896.18 2.89 2.89 0 0 1-3.208 0l-.353-.234a1.88 1.88 0 0 0-2.086 0l-.353.235a2.89 2.89 0 0 1-3.208 0 2.89 2.89 0 0 0-2.897-.18A1.727 1.727 0 0 1 2 19.205V12C2 6.477 6.477 2 12 2s10 4.477 10 10ZM9.447 14.398a.75.75 0 1 0-.894 1.204A5.77 5.77 0 0 0 12 16.75a5.77 5.77 0 0 0 3.447-1.148.75.75 0 1 0-.894-1.204A4.27 4.27 0 0 1 12 15.25a4.27 4.27 0 0 1-2.553-.852ZM16 9.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 11c.552 0 1-.672 1-1.5S9.552 8 9 8s-1 .672-1 1.5.448 1.5 1 1.5Z" clipRule="evenodd"/>
    </svg>
  );
}
