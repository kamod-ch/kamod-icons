import type { IconProps } from "../../../shared/types";

export function EmojiThinkRightIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 15h3m5-3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
    </svg>
  );
}
