import type { IconProps } from "../../../shared/types";

export function EmojiBlinkRightIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 9h2m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.5s1.5 2 4.5 2 4.5-2 4.5-2"/>
    </svg>
  );
}
