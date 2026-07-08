import type { IconProps } from "../../../shared/types";

export function CommentCheckIcon({
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
      <path fill="currentColor" d="M16.03 10.28a.75.75 0 1 0-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0z"/><path fill="currentColor" fillRule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 2.042.57 3.952 1.56 5.58l-.783 2.15c-.507 1.396.847 2.75 2.243 2.242l2.15-.782c1.628.99 3.538 1.56 5.58 1.56 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25ZM2.75 12A9.25 9.25 0 1 1 12 21.25a9.2 9.2 0 0 1-4.882-1.392 1.26 1.26 0 0 0-1.1-.117l-2.26.822a.25.25 0 0 1-.32-.32l.821-2.261c.136-.375.082-.78-.118-1.1A9.2 9.2 0 0 1 2.75 12Z" clipRule="evenodd"/>
    </svg>
  );
}
