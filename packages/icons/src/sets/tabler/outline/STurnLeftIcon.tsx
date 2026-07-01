import type { IconProps } from "../../../shared/types";

export function STurnLeftIcon({
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
      <path d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/><path d="M17 5H7.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7H3"/><path d="m6 16-3 3 3 3"/>
    </svg>
  );
}
