import type { IconProps } from "../../../shared/types";

export function Link12Icon({
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
      <path fill="currentColor" d="M15.408 18.592c-.4 0-.73-.33-.73-.73s.33-.73.73-.73c2.82 0 5.12-2.3 5.12-5.12s-2.3-5.12-5.12-5.12a5.13 5.13 0 0 0-5.12 5.12c0 .4-.33.73-.73.73s-.73-.33-.73-.73c0-3.63 2.95-6.59 6.59-6.59s6.58 2.95 6.58 6.58-2.95 6.59-6.59 6.59Z"/><path fill="currentColor" d="M8.59 5.41c.4 0 .73.33.73.73s-.33.73-.73.73a5.13 5.13 0 0 0-5.12 5.12c0 2.82 2.3 5.12 5.12 5.12s5.12-2.3 5.12-5.12c0-.4.33-.73.73-.73s.73.33.73.73c0 3.63-2.95 6.59-6.59 6.59S2 15.63 2 12s2.95-6.59 6.59-6.59Z"/>
    </svg>
  );
}
