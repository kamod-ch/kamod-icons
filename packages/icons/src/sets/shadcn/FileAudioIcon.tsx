import type { IconProps } from "../../shared/types";

export function FileAudioIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.5 22h.5c.5 0 1-.2 1.4-.6s.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6S4 3.5 4 4v3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 2v6h6M10 20v-1a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0m-4 0v-1a2 2 0 0 0-4 0v1a2 2 0 0 0 4 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 19v-3a6 6 0 1 1 12 0v3"/>
    </svg>
  );
}
