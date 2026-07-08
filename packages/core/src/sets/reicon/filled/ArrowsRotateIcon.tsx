import type { IconProps } from "../../../shared/types";

export function ArrowsRotateIcon({
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
      <path fill="currentColor" d="M12.001 21a9 9 0 0 0 8.82-7.199 1 1 0 0 1 1.96.398C21.761 19.22 17.324 23 12.001 23 8.279 23 4.991 21.152 3 18.324V20a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H4.205A9 9 0 0 0 12 21ZM3.18 10.199A9.003 9.003 0 0 1 19.796 7.5H17.5a1 1 0 1 0 0 2h4.501a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v1.675A10.99 10.99 0 0 0 12 1C6.677 1 2.24 4.78 1.22 9.801a1 1 0 0 0 1.96.398Z"/>
    </svg>
  );
}
