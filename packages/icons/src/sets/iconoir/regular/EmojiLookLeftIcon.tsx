import type { IconProps } from "../../../shared/types";

export function EmojiLookLeftIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.458 15A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7m0 0H7"/>
    </svg>
  );
}
