import type { IconProps } from "../../../shared/types";

export function FilePowerIcon({
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
      <path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm.555 9.168a1 1 0 0 0-1.387.277l-2 3-.057.097A1 1 0 0 0 10 16h2.13l-.962 1.445a1 1 0 1 0 1.664 1.11l2-3 .057-.097A1 1 0 0 0 14 14h-2.132l.964-1.445a1 1 0 0 0-.277-1.387"/><path d="M19 7h-4l-.001-4.001z"/>
    </svg>
  );
}
