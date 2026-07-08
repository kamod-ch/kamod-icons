import type { IconProps } from "../../../shared/types";

export function GasPumpIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M21.878 4.854a1 1 0 1 0-1.756.958l1.382 2.534a1 1 0 0 0-.837.987v2.334a1 1 0 0 0 1 1h.353l.008 1.363a2 2 0 0 1-4-.002 1 1 0 0 0-2 0 4 4 0 0 0 8 0L24 9.337c0-.39-.099-.773-.285-1.114z"/><path d="M19.333 20H18V5.667A3.67 3.67 0 0 0 14.333 2H7.667A3.67 3.67 0 0 0 4 5.667V20H2.67a1 1 0 0 0 0 2h16.663a1 1 0 0 0 0-2ZM7.667 4h6.666A1.67 1.67 0 0 1 16 5.667v5H6v-5A1.67 1.67 0 0 1 7.667 4Z"/></g>
    </svg>
  );
}
