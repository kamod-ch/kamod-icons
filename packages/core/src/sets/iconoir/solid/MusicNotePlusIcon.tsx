import type { IconProps } from "../../../shared/types";

export function MusicNotePlusIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 10h3m3 0h-3m0 0V7m0 3v3"/><path fill="currentColor" d="M5 21H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3V4l5-1v4L7 8v11a2 2 0 0 1-2 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm0 0V8m0 0V4l5-1v4z"/>
    </svg>
  );
}
