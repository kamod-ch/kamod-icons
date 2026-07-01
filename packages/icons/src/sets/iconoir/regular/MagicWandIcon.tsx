import type { IconProps } from "../../../shared/types";

export function MagicWandIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m3 21 10-10m5-5-2.5 2.5"/><path stroke="currentColor" strokeLinejoin="round" d="m9.5 2 .945 2.555L13 5.5l-2.555.945L9.5 9l-.945-2.555L6 5.5l2.555-.945zm9.5 8 .54 1.46L21 12l-1.46.54L19 14l-.54-1.46L17 12l1.46-.54z"/>
    </svg>
  );
}
