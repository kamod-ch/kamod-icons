import type { IconProps } from "../../../shared/types";

export function CommentIcon({
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
      <path fill="currentColor" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12c0 2.042.57 3.952 1.56 5.58l-.783 2.15c-.507 1.396.847 2.75 2.243 2.242l2.15-.782c1.628.99 3.538 1.56 5.58 1.56 5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25Z"/>
    </svg>
  );
}
