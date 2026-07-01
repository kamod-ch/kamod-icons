import type { IconProps } from "../../../shared/types";

export function EmojiSatisfiedIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 9H8m8 0h-2M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 14.5s-1.5 2-4.5 2-4.5-2-4.5-2"/>
    </svg>
  );
}
