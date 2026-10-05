import type { IconProps } from "../../shared/types";

export function SyncIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14.5 4.5H18a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.5m-5 0H6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.5M12 2l2.5 2.5L12 7m0 10-2.5 2.5L12 22"/>
    </svg>
  );
}
