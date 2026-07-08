import type { IconProps } from "../../../shared/types";

export function CookieIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><circle cx="12.25" cy="1.75" r=".75"/><circle cx="14.75" cy="4.25" r=".75"/><path d="M16.87 7.599a.746.746 0 0 0-1.015-.566 3 3 0 0 1-1.105.217 2.994 2.994 0 0 1-2.958-2.624.75.75 0 0 0-.818-.652L10.75 4a2.24 2.24 0 0 1-2.239-2.165.748.748 0 0 0-.877-.711A7.98 7.98 0 0 0 1 9c0 4.411 3.589 8 8 8s8-3.589 8-8c0-.451-.042-.909-.13-1.401ZM7 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm.25 6.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"/></g>
    </svg>
  );
}
