import type { IconProps } from "../../../shared/types";

export function FileSymlinkIcon({
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
      <path d="M4 21v-4a3 3 0 0 1 3-3h5"/><path d="m9 17 3-3-3-3m5-8v4a1 1 0 0 0 1 1h4"/><path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H7.5"/>
    </svg>
  );
}
