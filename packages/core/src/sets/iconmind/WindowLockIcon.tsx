import type { IconProps } from "../../shared/types";

export function WindowLockIcon({
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
      <path d="M3 4.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2ZM3 7h18"/><path d="M8 14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2.5a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm2-2a2 2 0 0 1 4 0"/>
    </svg>
  );
}
