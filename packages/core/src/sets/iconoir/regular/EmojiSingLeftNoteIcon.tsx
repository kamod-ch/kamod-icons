import type { IconProps } from "../../../shared/types";

export function EmojiSingLeftNoteIcon({
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
      <path fill="currentColor" d="M2.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0"/><path stroke="currentColor" strokeLinecap="round" d="M2.8 8.1a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.05 13c.501 5.053 4.765 9 9.95 9 5.523 0 10-4.477 10-10S17.523 2 12 2a10 10 0 0 0-4 .832"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 9a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
    </svg>
  );
}
