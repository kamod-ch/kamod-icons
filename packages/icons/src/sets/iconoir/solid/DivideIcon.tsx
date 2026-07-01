import type { IconProps } from "../../../shared/types";

export function DivideIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M2.25 7A.75.75 0 0 1 3 6.25h4A5.75 5.75 0 0 1 12.75 12v9a.75.75 0 0 1-1.5 0v-9A4.25 4.25 0 0 0 7 7.75H3A.75.75 0 0 1 2.25 7" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M17 7.75A4.25 4.25 0 0 0 12.75 12v9a.75.75 0 0 1-1.5 0v-9A5.75 5.75 0 0 1 17 6.25h4a.75.75 0 0 1 0 1.5zM7.287 2.307A.75.75 0 0 1 7.75 3v8a.75.75 0 0 1-1.28.53l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 .817-.163" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M16.713 2.307A.75.75 0 0 0 16.25 3v8a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-.817-.163" clipRule="evenodd"/>
    </svg>
  );
}
