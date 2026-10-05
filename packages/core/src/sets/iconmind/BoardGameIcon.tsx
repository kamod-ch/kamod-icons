import type { IconProps } from "../../shared/types";

export function BoardGameIcon({
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
      <path d="M3 6v12h18V6Zm0 6h18"/><path d="M6 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m8 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
