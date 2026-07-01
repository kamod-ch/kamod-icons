import type { IconProps } from "../../../shared/types";

export function MonkeybarIcon({
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
      <path d="M3 21V6l5-3 5 3v15m-5 0v-7m-5 0h10"/><path d="M6 10a2 2 0 1 1 4 0m3 3c6 0 3 8 8 8"/>
    </svg>
  );
}
